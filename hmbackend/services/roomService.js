const db = require("../config/database");

// ======================================
// Check Room Number Exists
// ======================================

const roomNumberExists = async (hotel_id, room_number) => {
  const [rows] = await db.query(
    `
    SELECT id
    FROM rooms
    WHERE hotel_id = ?
    AND room_number = ?
    AND is_active = 1
    `,
    [hotel_id, room_number],
  );

  return rows.length > 0;
};

// ======================================
// Check Room Type Exists
// ======================================

const roomTypeExists = async (hotel_id, room_type_id) => {
  const [rows] = await db.query(
    `
    SELECT id
    FROM room_types
    WHERE id = ?
    AND hotel_id = ?
    AND is_active = 1
    `,
    [room_type_id, hotel_id],
  );

  return rows.length > 0;
};

// ======================================
// Create Room
// ======================================

const createRoom = async (data) => {
  const {
    hotel_id,
    room_type_id,
    room_number,
    floor_no,
    room_view,
    room_status,
    housekeeping_status,
    notes,
  } = data;

  const [result] = await db.query(
    `
    INSERT INTO rooms
    (
      hotel_id,
      room_type_id,
      room_number,
      floor_no,
      room_view,
      room_status,
      housekeeping_status,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      hotel_id,
      room_type_id,
      room_number,
      floor_no,
      room_view || "None",
      room_status || "Available",
      housekeeping_status || "Clean",
      notes || null,
    ],
  );

  return result.insertId;
};
// ======================================
// Get All Rooms
// ======================================

const getRooms = async (hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT

        r.id,
        r.room_number,
        r.floor_no,
        r.room_view,
        r.room_status,
        r.housekeeping_status,
        r.notes,

        rt.id AS room_type_id,
        rt.type_name,
        rt.base_price,
        rt.max_capacity,
        rt.bed_type,
        rt.room_size

    FROM rooms r

    INNER JOIN room_types rt
        ON r.room_type_id = rt.id

    WHERE
        r.hotel_id = ?
        AND r.is_active = 1

    ORDER BY
        r.floor_no ASC,
        r.room_number ASC
    `,
    [hotel_id],
  );

  return rows;
};

// ======================================
// Get Room By Id
// ======================================

const getRoomById = async (roomId, hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT

        r.id,
        r.room_number,
        r.floor_no,
        r.room_view,
        r.room_status,
        r.housekeeping_status,
        r.notes,

        rt.id AS room_type_id,
        rt.type_name,
        rt.base_price,
        rt.max_capacity,
        rt.bed_type,
        rt.room_size

    FROM rooms r

    INNER JOIN room_types rt
        ON r.room_type_id = rt.id

    WHERE
        r.id = ?
        AND r.hotel_id = ?
        AND r.is_active = 1
    `,
    [roomId, hotel_id],
  );

  return rows[0];
};

// ======================================
// Update Room
// ======================================

const updateRoom = async (roomId, hotel_id, data) => {
  const {
    room_type_id,
    room_number,
    floor_no,
    room_view,
    room_status,
    housekeeping_status,
    notes,
  } = data;

  await db.query(
    `
    UPDATE rooms
    SET
        room_type_id = ?,
        room_number = ?,
        floor_no = ?,
        room_view = ?,
        room_status = ?,
        housekeeping_status = ?,
        notes = ?,
        updated_at = NOW()

    WHERE
        id = ?
        AND hotel_id = ?
    `,
    [
      room_type_id,
      room_number,
      floor_no,
      room_view,
      room_status,
      housekeeping_status,
      notes,
      roomId,
      hotel_id,
    ],
  );
};

// ======================================
// Check Duplicate Room Number
// (Exclude Current Room)
// ======================================

const roomNumberExistsForUpdate = async (hotel_id, room_number, roomId) => {
  const [rows] = await db.query(
    `
    SELECT id
    FROM rooms

    WHERE
        hotel_id = ?
        AND room_number = ?
        AND id != ?
        AND is_active = 1
    `,
    [hotel_id, room_number, roomId],
  );

  return rows.length > 0;
};

// ======================================
// Delete Room (Soft Delete)
// ======================================

const deleteRoom = async (roomId, hotel_id) => {
  await db.query(
    `
    UPDATE rooms
    SET
        is_active = 0,
        updated_at = NOW()

    WHERE
        id = ?
        AND hotel_id = ?
    `,
    [roomId, hotel_id],
  );
};

module.exports = {
  roomNumberExists,
  roomTypeExists,
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  roomNumberExistsForUpdate,
  deleteRoom,
};
