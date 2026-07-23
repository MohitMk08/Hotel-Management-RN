const db = require("../config/database");

/**
 * Create Hotel
 */
const createHotel = async (connection) => {
  const [result] = await connection.query(
    `INSERT INTO hotels
    (
      hotel_name,
      setup_completed
    )
    VALUES (?, ?)`,
    ["My Hotel", false],
  );

  return result.insertId;
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

module.exports = {
  createHotel,
  createHotelSettings,
};
