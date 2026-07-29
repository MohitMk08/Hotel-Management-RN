const db = require("../config/database");

// ==========================
// Create Room Type
// ==========================

const createRoomType = async ({
  hotel_id,
  type_name,
  max_capacity,
  base_price,
  description,
}) => {
  const [result] = await db.query(
    `INSERT INTO room_types
    (
      hotel_id,
      type_name,
      max_capacity,
      base_price,
      description
    )
    VALUES (?, ?, ?, ?, ?)`,
    [hotel_id, type_name.trim(), max_capacity, base_price, description || null],
  );

  return result.insertId;
};

// ==========================
// Check Existing Room Type
// ==========================

const roomTypeExists = async (hotel_id, type_name) => {
  const [rows] = await db.query(
    `
    SELECT
        id,
        is_active
    FROM room_types
    WHERE hotel_id = ?
    AND LOWER(type_name)=LOWER(?)
    LIMIT 1
    `,
    [hotel_id, type_name],
  );

  return rows[0] || null;
};

// ==========================
// Get All Room Types
// ==========================

const getRoomTypes = async (hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT
        id,
        hotel_id,
        type_name,
        max_capacity,
        base_price,
        description,
        created_at,
        updated_at
    FROM room_types
    WHERE hotel_id = ?
    AND is_active = 1
    ORDER BY id DESC
    `,
    [hotel_id],
  );

  return rows;
};

// ==========================
// Get Room Type By Id
// ==========================

const getRoomTypeById = async (id, hotel_id) => {
  const [rows] = await db.query(
    `
    SELECT
        id,
        hotel_id,
        type_name,
        max_capacity,
        base_price,
        description,
        created_at,
        updated_at
    FROM room_types
    WHERE id = ?
    AND is_active = 1
    AND hotel_id = ?
    `,
    [id, hotel_id],
  );

  return rows[0];
};

// ==========================
// Update Room Type
// ==========================

const updateRoomType = async (id, hotel_id, data) => {
  const { type_name, max_capacity, base_price, description } = data;

  const [result] = await db.query(
    `
    UPDATE room_types
    SET
      type_name = ?,
      max_capacity = ?,
      base_price = ?,
      description = ?,
      updated_at = NOW()
    WHERE id = ?
    AND hotel_id = ?
    `,
    [type_name, max_capacity, base_price, description, id, hotel_id],
  );

  return result;
};

// ======================================
// Check Duplicate During Update
// ======================================

const roomTypeExistsForUpdate = async (hotel_id, type_name, room_type_id) => {
  const [rows] = await db.query(
    `
    SELECT id
    FROM room_types
    WHERE hotel_id = ?
    AND type_name = ?
    AND id != ?
    `,
    [hotel_id, type_name, room_type_id],
  );

  return rows.length > 0;
};

// ======================================
// Delete Room Type (Soft Delete)
// ======================================

const deleteRoomType = async (id, hotel_id) => {
  const [result] = await db.query(
    `
    UPDATE room_types
    SET
        is_active = 0,
        updated_at = NOW()
    WHERE id = ?
    AND hotel_id = ?
    `,
    [id, hotel_id],
  );

  return result;
};

// ======================================
// Reactivate Room Type
// ======================================

const reactivateRoomType = async (id, data) => {
  const { max_capacity, base_price, description } = data;

  const [result] = await db.query(
    `
    UPDATE room_types
    SET
        is_active = 1,
        max_capacity = ?,
        base_price = ?,
        description = ?,
        updated_at = NOW()
    WHERE id = ?
    `,
    [max_capacity, base_price, description, id],
  );

  return result;
};

module.exports = {
  createRoomType,
  roomTypeExists,
  getRoomTypes,
  getRoomTypeById,
  updateRoomType,
  roomTypeExistsForUpdate,
  deleteRoomType,
  reactivateRoomType,
};
