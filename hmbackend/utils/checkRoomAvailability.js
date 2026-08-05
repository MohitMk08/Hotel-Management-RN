const db = require("../config/database");

const { BOOKING_STATUS } = require("../constants/bookingConstants");

// ======================================
// Check Room Availability
// ======================================

const checkRoomAvailability = async (
  hotelId,
  roomId,
  checkInDate,
  checkOutDate,
  excludeBookingId = null,
  connection = db,
) => {
  let query = `
    SELECT id

    FROM bookings

    WHERE

        hotel_id = ?
        AND room_id = ?

        AND booking_status IN (?, ?)

        AND check_in_date < ?
        AND check_out_date > ?
  `;

  const params = [
    hotelId,
    roomId,
    BOOKING_STATUS.RESERVED,
    BOOKING_STATUS.CHECKED_IN,
    checkOutDate,
    checkInDate,
  ];

  // Ignore current booking while updating
  if (excludeBookingId !== null) {
    query += `
      AND id != ?
    `;

    params.push(excludeBookingId);
  }

  const [rows] = await connection.query(query, params);

  return rows.length === 0;
};

module.exports = checkRoomAvailability;
