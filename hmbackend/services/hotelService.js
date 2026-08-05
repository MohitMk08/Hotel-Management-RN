const db = require("../config/database");
const generateHotelCode = require("../utils/generateHotelCode");
/**
 * Create Hotel
 */
const createHotel = async (connection) => {
  const [result] = await connection.query(
    `
    INSERT INTO hotels
    (
      hotel_name,
      setup_completed
    )
    VALUES (?, ?)
    `,
    ["My Hotel", false],
  );

  const hotelId = result.insertId;

  const hotelCode = generateHotelCode(hotelId);

  await connection.query(
    `
    UPDATE hotels
    SET hotel_code = ?
    WHERE id = ?
    `,
    [hotelCode, hotelId],
  );

  return hotelId;
};

/**
 * Create Default Hotel Settings
 */
const createHotelSettings = async (connection, hotelId) => {
  await connection.query(
    `INSERT INTO hotel_settings
    (
      hotel_id
    )
    VALUES (?)`,
    [hotelId],
  );
};

// ======================================
// Get Hotel Code
// ======================================

const getHotelCode = async (hotelId) => {
  const [rows] = await db.query(
    `
    SELECT hotel_code
    FROM hotels
    WHERE id = ?
    `,
    [hotelId],
  );

  return rows[0];
};

module.exports = {
  createHotel,
  createHotelSettings,
  getHotelCode,
};
