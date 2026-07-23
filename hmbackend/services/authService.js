const bcrypt = require("bcrypt");
const db = require("../config/database");

const hotelService = require("./hotelService");

const registerOwner = async (userData) => {
  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const { full_name, email, mobile, password } = userData;

    //----------------------------------------
    // Check Existing User
    //----------------------------------------

    const [existing] = await connection.query(
      "SELECT id FROM users WHERE email=?",
      [email.trim().toLowerCase()],
    );

    if (existing.length > 0) {
      throw new Error("Email already registered");
    }

    //----------------------------------------
    // Get Owner Role
    //----------------------------------------

    const [roles] = await connection.query(
      "SELECT id FROM roles WHERE role_name=?",
      ["Owner"],
    );

    if (roles.length === 0) {
      throw new Error("Owner role not found");
    }

    const ownerRole = roles[0].id;

    //----------------------------------------
    // Hash Password
    //----------------------------------------

    const hashedPassword = await bcrypt.hash(password, 10);

    //----------------------------------------
    // Create Hotel
    //----------------------------------------

    const hotelId = await hotelService.createHotel(connection);

    //----------------------------------------
    // Create Hotel Settings
    //----------------------------------------

    await hotelService.createHotelSettings(connection, hotelId);

    //----------------------------------------
    // Create Owner User
    //----------------------------------------

    const [userResult] = await connection.query(
      `INSERT INTO users
      (
        hotel_id,
        full_name,
        email,
        password,
        mobile,
        role_id,
        auth_provider
      )
      VALUES (?,?,?,?,?,?,?)`,
      [
        hotelId,
        full_name.trim(),
        email.trim().toLowerCase(),
        hashedPassword,
        mobile.trim(),
        ownerRole,
        "email",
      ],
    );

    const [users] = await connection.query("SELECT * FROM users WHERE id=?", [
      userResult.insertId,
    ]);

    await connection.commit();

    return users[0];
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
};

module.exports = {
  registerOwner,
};
