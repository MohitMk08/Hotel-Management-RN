const bcrypt = require("bcrypt");
const db = require("../config/database");
const generateToken = require("../utils/generateToken");
const {
  validateRegister,
  validateLogin,
} = require("../validators/authValidator");

const { successResponse, errorResponse } = require("../utils/responseHandler");

//register function
const register = async (req, res) => {
  try {
    const { full_name, email, mobile, password } = req.body;

    // ==========================
    // Validate Request
    // ==========================

    const validation = validateRegister(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    // ==========================
    // Check Existing User
    // ==========================

    const [existingUser] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email.trim().toLowerCase()],
    );

    if (existingUser.length > 0) {
      return errorResponse(res, "Email already registered", 409);
    }

    // ==========================
    // Hash Password
    // ==========================

    const hashedPassword = await bcrypt.hash(password, 10);

    // ==========================
    // Get Default Role
    // ==========================

    const [roles] = await db.query("SELECT id FROM roles WHERE role_name = ?", [
      "Receptionist",
    ]);

    if (roles.length === 0) {
      return errorResponse(res, "Default role not found", 500);
    }

    const roleId = roles[0].id;

    // ==========================
    // Insert User
    // ==========================

    const [result] = await db.query(
      `INSERT INTO users
      (
        full_name,
        email,
        password,
        mobile,
        role_id,
        auth_provider
      )
      VALUES (?, ?, ?, ?, ?, ?)`,
      [
        full_name.trim(),
        email.trim().toLowerCase(),
        hashedPassword,
        mobile.trim(),
        roleId,
        "email",
      ],
    );

    // ==========================
    // Success Response
    // ==========================

    return successResponse(
      res,
      "User registered successfully",
      {
        userId: result.insertId,
      },
      201,
    );
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

//login function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ==========================
    // Validate Request
    // ==========================

    const validation = validateLogin(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    // ==========================
    // Find User
    // ==========================

    const [users] = await db.query(
      `SELECT
      u.id,
      u.full_name,
      u.email,
      u.password,
      u.mobile,
      u.role_id,
      r.role_name,
      u.auth_provider,
      u.is_active
   FROM users u
   INNER JOIN roles r
   ON u.role_id = r.id
   WHERE u.email = ?`,
      [email.trim().toLowerCase()],
    );
    if (users.length === 0) {
      return errorResponse(res, "Invalid email or password", 401);
    }

    const user = users[0];

    // ==========================
    // Check User Status
    // ==========================

    if (!user.is_active) {
      return errorResponse(res, "Your account has been deactivated", 403);
    }

    // ==========================
    // Compare Password
    // ==========================

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return errorResponse(res, "Invalid email or password", 401);
    }

    // ==========================
    // Update Last Login
    // ==========================

    await db.query("UPDATE users SET last_login = NOW() WHERE id = ?", [
      user.id,
    ]);

    // ==========================
    // Generate JWT
    // ==========================

    const token = generateToken(user);

    // ==========================
    // Success Response
    // ==========================

    return successResponse(res, "Login successful", {
      token,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        mobile: user.mobile,

        role: {
          id: user.role_id,
          name: user.role_name,
        },

        auth_provider: user.auth_provider,
      },
    });
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

module.exports = {
  register,
  login,
};
