/**
 * Generate Hotel Code
 *
 * Examples:
 * Hotel ID 1    -> H001
 * Hotel ID 25   -> H025
 * Hotel ID 125  -> H125
 * Hotel ID 1250 -> H1250
 */

const generateHotelCode = (hotelId) => {
  return `H${String(hotelId).padStart(3, "0")}`;
};

module.exports = generateHotelCode;
