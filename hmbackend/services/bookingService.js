const db = require("../config/database");

const AppError = require("../utils/AppError");
const roomService = require("./roomService");
const guestService = require("./guestService");
const hotelService = require("./hotelService");

const checkRoomAvailability = require("../utils/checkRoomAvailability");
const generateDocumentNumber = require("../utils/generateDocumentNumber");

const DOCUMENT_TYPES = require("../constants/documentTypes");
const {
  BOOKING_STATUS,
  PAYMENT_STATUS,
  BOOKING_SOURCE,
} = require("../constants/bookingConstants");

// ======================================
// Create Booking
// ======================================

const createBooking = async (data) => {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const {
      hotel_id,
      created_by,

      guest_id,
      room_id,

      check_in_date,
      check_out_date,

      adults,
      children,

      booking_source,
      special_request,
      notes,

      discount = 0,
      tax = 0,
      advance_amount = 0,
    } = data;

    const guest = await guestService.getGuestForBooking(guest_id, hotel_id);

    if (!guest) {
      throw new AppError("Guest not found", 404);
    }

    const room = await roomService.getRoomForBooking(room_id, hotel_id);

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    if (room.room_status !== "Available") {
      throw new AppError("Room is not available", 400);
    }

    const available = await checkRoomAvailability(
      hotel_id,
      room_id,
      check_in_date,
      check_out_date,
      null,
      connection,
    );

    if (!available) {
      throw new AppError("Room already booked for selected dates", 409);
    }

    const hotel = await hotelService.getHotelCode(hotel_id);

    if (!hotel) {
      throw new AppError("Hotel not found", 404);
    }

    const hotelCode = hotel.hotel_code;

    const booking_number = await generateDocumentNumber(
      hotelCode,
      hotel_id,
      DOCUMENT_TYPES.BOOKING,
      connection,
    );

    const checkIn = new Date(check_in_date);

    const checkOut = new Date(check_out_date);

    const totalNights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

    if (totalNights <= 0) {
      throw new AppError("Invalid booking dates", 400);
    }

    const room_rate = Number(room.base_price);

    const roomTotal = room_rate * totalNights;

    const total_amount = roomTotal - Number(discount) + Number(tax);

    const [result] = await connection.query(
      `
      INSERT INTO bookings
      (
        hotel_id,
        booking_number,
        guest_id,
        room_id,

        check_in_date,
check_out_date,
total_nights,

adults,
children,

        room_rate,
        discount,
        tax,
        total_amount,
        advance_amount,

        booking_status,
        payment_status,
        booking_source,

        special_request,
        notes,

        created_by
      )

      VALUES
(
  ?, ?, ?, ?, ?, ?,
  ?, ?, ?,
  ?, ?, ?, ?, ?,
  ?, ?, ?,
  ?, ?, ?
)
      `,
      [
        hotel_id,
        booking_number,
        guest_id,
        room_id,

        check_in_date,
        check_out_date,
        totalNights,

        adults,
        children,

        room_rate,
        discount,
        tax,
        total_amount,
        advance_amount,

        BOOKING_STATUS.RESERVED,
        PAYMENT_STATUS.PENDING,

        booking_source || BOOKING_SOURCE.WALK_IN,

        special_request || null,
        notes || null,

        created_by,
      ],
    );

    await connection.commit();

    return {
      id: result.insertId,
      booking_number,
    };
  } catch (error) {
    await connection.rollback();

    throw error;
  } finally {
    connection.release();
  }
};

// ======================================
// Get All Bookings
// ======================================

const getBookings = async (hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT

        b.id,
        b.booking_number,

        b.check_in_date,
        b.check_out_date,

        b.booking_status,
        b.payment_status,

        b.room_rate,
        b.discount,
        b.tax,
        b.total_amount,
        b.advance_amount,

        (b.total_amount - b.advance_amount) AS balance_amount,

        b.booking_source,

        CONCAT(
            g.first_name,
            ' ',
            COALESCE(g.last_name,'')
        ) AS guest_name,

        g.mobile,

        r.room_number,

        rt.type_name

    FROM bookings b

    INNER JOIN guests g
        ON b.guest_id = g.id

    INNER JOIN rooms r
        ON b.room_id = r.id

    INNER JOIN room_types rt
        ON r.room_type_id = rt.id

    WHERE

        b.hotel_id = ?

    ORDER BY

        b.created_at DESC
    `,
    [hotel_id],
  );

  return rows;
};

// ======================================
// Get Booking By Id
// ======================================

const getBookingById = async (bookingId, hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT

        b.*,

        CONCAT(
            g.first_name,
            ' ',
            COALESCE(g.last_name,'')
        ) AS guest_name,

        g.mobile,
        g.email,
        g.vip_status,

        r.room_number,

        rt.type_name,
        rt.base_price

    FROM bookings b

    INNER JOIN guests g
        ON b.guest_id = g.id

    INNER JOIN rooms r
        ON b.room_id = r.id

    INNER JOIN room_types rt
        ON r.room_type_id = rt.id

    WHERE

        b.id = ?
        AND b.hotel_id = ?
    `,
    [bookingId, hotel_id],
  );

  return rows[0];
};

// ======================================
// Update Booking
// ======================================

const updateBooking = async (bookingId, hotel_id, data) => {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();
    const booking = await getBookingById(bookingId, hotel_id);

    if (!booking) {
      throw new AppError("Booking not found", 404);
    }

    if (booking.booking_status !== BOOKING_STATUS.RESERVED) {
      throw new AppError("Only reserved bookings can be updated", 400);
    }

    const {
      room_id,

      check_in_date,
      check_out_date,

      adults,
      children,

      booking_source,
      special_request,
      notes,

      discount,
      tax,
      advance_amount,
    } = data;

    const selectedRoomId = room_id || booking.room_id;

    const room = await roomService.getRoomForBooking(selectedRoomId, hotel_id);

    if (!room) {
      throw new AppError("Room not found", 404);
    }

    if (
      selectedRoomId !== booking.room_id &&
      room.room_status !== "Available"
    ) {
      throw new AppError("Room is not available", 400);
    }

    // ======================================
    // Final Financial Values
    // ======================================

    const finalDiscount = discount ?? booking.discount;
    const finalTax = tax ?? booking.tax;
    const finalAdvanceAmount = advance_amount ?? booking.advance_amount;

    // ======================================
    // Final Dates
    // ======================================

    const finalCheckInDate = check_in_date || booking.check_in_date;
    const finalCheckOutDate = check_out_date || booking.check_out_date;

    // ======================================
    // Check Room Availability
    // ======================================

    const isAvailable = await checkRoomAvailability(
      hotel_id,
      selectedRoomId,
      finalCheckInDate,
      finalCheckOutDate,
      bookingId,
      connection,
    );

    if (!isAvailable) {
      throw new AppError("Room already booked for selected dates", 409);
    }

    // ======================================
    // Calculate Nights
    // ======================================

    const checkIn = new Date(finalCheckInDate);
    const checkOut = new Date(finalCheckOutDate);

    const totalNights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

    if (totalNights <= 0) {
      throw new AppError("Invalid booking dates", 400);
    }

    // ======================================
    // Calculate Amount
    // ======================================

    let roomRate = Number(booking.room_rate);

    if (selectedRoomId !== booking.room_id) {
      roomRate = Number(room.base_price);
    }
    const roomTotal = roomRate * totalNights;

    const totalAmount = roomTotal - Number(finalDiscount) + Number(finalTax);

    // ======================================
    // Update Booking
    // ======================================

    await connection.query(
      `
  UPDATE bookings

  SET
      room_id = ?,

      check_in_date = ?,
      check_out_date = ?,
      total_nights = ?,

      adults = ?,
      children = ?,

     room_rate = ?,
     discount = ?,
     tax = ?,
     total_amount = ?,
     advance_amount = ?,

      booking_source = ?,

      special_request = ?,
      notes = ?,

      updated_at = NOW()

  WHERE
      id = ?
      AND hotel_id = ?
  `,
      [
        selectedRoomId,

        finalCheckInDate,
        finalCheckOutDate,
        totalNights,

        adults ?? booking.adults,
        children ?? booking.children,

        roomRate,
        finalDiscount,
        finalTax,
        totalAmount,
        finalAdvanceAmount,

        booking_source ?? booking.booking_source,
        special_request ?? booking.special_request,
        notes ?? booking.notes,

        bookingId,
        hotel_id,
      ],
    );

    await connection.commit();

    return {
      id: bookingId,
      booking_number: booking.booking_number,
      message: "Booking updated successfully",
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
};
