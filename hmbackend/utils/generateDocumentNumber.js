const formatDate = require("./formatDate");

/**
 * Generate Document Number
 *
 * Format:
 * HOTELCODE-PREFIX-YYYYMMDD-0001
 *
 * Example:
 * RPH-BKG-20260804-0001
 * RPH-INV-20260804-0001
 *
 * @param {number} hotelId
 * @param {string} documentConfig
 * @param {object} connection
 * @returns {Promise<string>}
 */

const generateDocumentNumber = async (
  hotelCode,
  hotelId,
  documentConfig,
  connection,
) => {
  // ==========================================
  // Validate Document Type
  // ==========================================

  if (!documentConfig || !documentConfig.type || !documentConfig.prefix) {
    throw new Error("Invalid document type");
  }

  // ==========================================
  // Format Date
  // ==========================================

  const { sequenceDate, datePart } = formatDate();

  // ==========================================
  // Lock Sequence Row
  // ==========================================

  const [rows] = await connection.query(
    `
    SELECT id, last_serial
    FROM document_sequences
    WHERE hotel_id = ?
      AND document_type = ?
      AND sequence_date = ?
    FOR UPDATE
    `,
    [hotelId, documentConfig.type, sequenceDate],
  );

  let serial;

  // ==========================================
  // First Document Of The Day
  // ==========================================

  if (rows.length === 0) {
    serial = 1;

    await connection.query(
      `
      INSERT INTO document_sequences
      (
        hotel_id,
        document_type,
        sequence_date,
        last_serial
      )
      VALUES (?, ?, ?, ?)
      `,
      [hotelId, documentConfig.type, sequenceDate, serial],
    );
  } else {
    serial = rows[0].last_serial + 1;

    await connection.query(
      `
      UPDATE document_sequences
      SET last_serial = ?
      WHERE id = ?
      `,
      [serial, rows[0].id],
    );
  }

  // ==========================================
  // Generate Final Document Number
  // ==========================================

  return `${hotelCode}-${documentConfig.prefix}${datePart}-${String(serial).padStart(4, "0")}`;
};

module.exports = generateDocumentNumber;
