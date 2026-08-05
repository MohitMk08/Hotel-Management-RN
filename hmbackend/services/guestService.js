const db = require("../config/database");

// ======================================
// Guest Exists
// ======================================

const guestExists = async (hotel_id, mobile) => {
  const [rows] = await db.query(
    `
    SELECT id
    FROM guests
    WHERE hotel_id = ?
    AND mobile = ?
    AND is_active = 1
    `,
    [hotel_id, mobile],
  );

  return rows.length > 0;
};

// ======================================
// Generate Guest Code
// ======================================

const generateGuestCode = async () => {
  const [rows] = await db.query(`
        SELECT id
        FROM guests
        ORDER BY id DESC
        LIMIT 1
    `);

  const nextId = rows.length > 0 ? rows[0].id + 1 : 1;

  return `GST${String(nextId).padStart(6, "0")}`;
};

// ======================================
// Create Guest
// ======================================

const createGuest = async (data) => {
  const {
    hotel_id,
    guest_code,
    first_name,
    last_name,
    gender,
    dob,
    mobile,
    email,
    nationality,
    id_type,
    id_number,
    address,
    city,
    state,
    country,
    zip_code,
    vip_status,
    guest_photo,
    notes,
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO guests
    (
      hotel_id,
      guest_code,
      first_name,
      last_name,
      gender,
      dob,
      mobile,
      email,
      nationality,
      id_type,
      id_number,
      address,
      city,
      state,
      country,
      zip_code,
      vip_status,
      guest_photo,
      notes
    )

    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `,
    [
      hotel_id,
      guest_code,
      first_name,
      last_name || null,
      gender || null,
      dob || null,
      mobile,
      email || null,
      nationality || null,
      id_type || null,
      id_number || null,
      address || null,
      city || null,
      state || null,
      country || null,
      zip_code || null,
      vip_status || 0,
      guest_photo || null,
      notes || null,
    ],
  );

  return result.insertId;
};

// ======================================
// Get All Guests
// ======================================

const getGuests = async (hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT
        id,
        guest_code,
        first_name,
        last_name,
        mobile,
        email,
        vip_status,
        guest_photo,
        created_at

    FROM guests

    WHERE
        hotel_id = ?
        AND is_active = 1

    ORDER BY
        created_at DESC
    `,
    [hotel_id],
  );

  return rows;
};

// ======================================
// Get Guest By Id
// ======================================

const getGuestById = async (guestId, hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT *
    FROM guests

    WHERE
        id = ?
        AND hotel_id = ?
        AND is_active = 1
    `,
    [guestId, hotel_id],
  );

  return rows[0];
};

// ======================================
// Update Guest
// ======================================

const updateGuest = async (guestId, hotel_id, data) => {
  await db.query(
    `
    UPDATE guests

    SET
        first_name = ?,
        last_name = ?,
        gender = ?,
        dob = ?,
        mobile = ?,
        email = ?,
        nationality = ?,
        id_type = ?,
        id_number = ?,
        address = ?,
        city = ?,
        state = ?,
        country = ?,
        zip_code = ?,
        vip_status = ?,
        guest_photo = ?,
        notes = ?,
        updated_at = NOW()

    WHERE
        id = ?
        AND hotel_id = ?
    `,
    [
      data.first_name,
      data.last_name,
      data.gender,
      data.dob,
      data.mobile,
      data.email,
      data.nationality,
      data.id_type,
      data.id_number,
      data.address,
      data.city,
      data.state,
      data.country,
      data.zip_code,
      data.vip_status,
      data.guest_photo,
      data.notes,
      guestId,
      hotel_id,
    ],
  );
};

// ======================================
// Delete Guest
// ======================================

const deleteGuest = async (guestId, hotel_id) => {
  await db.query(
    `
    UPDATE guests

    SET
        is_active = 0,
        updated_at = NOW()

    WHERE
        id = ?
        AND hotel_id = ?
    `,
    [guestId, hotel_id],
  );
};

// ======================================
// Get Guest For Booking
// ======================================

const getGuestForBooking = async (guestId, hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT
        id,
        first_name,
        last_name,
        mobile,
        vip_status

    FROM guests

    WHERE
        id = ?
        AND hotel_id = ?
        AND is_active = 1
    `,
    [guestId, hotel_id],
  );

  return rows[0];
};

module.exports = {
  guestExists,
  generateGuestCode,
  createGuest,
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
  getGuestForBooking,
};
