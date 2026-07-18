const bcrypt = require("bcrypt");
require("../config/firebaseAdmin");
const { getAuth } = require("firebase-admin/auth");
const db = require("../config/database");
const generateToken = require("../utils/generateToken");
const {
  validateRegister,
  validateLogin,
} = require("../validators/authValidator");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const googleAuth = async (req, res) => {
  try {
    const { firebaseToken } = req.body;

    if (!firebaseToken) {
      return errorResponse(res, "Firebase token is required", 400);
    }

    // =====================================
    // Verify Firebase ID Token
    // =====================================

    const decodedToken = await getAuth().verifyIdToken(firebaseToken);

    const { uid, email, name: full_name, picture } = decodedToken;

    // =====================================
    // Check Existing User
    // =====================================

    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    let user;

    if (existingUsers.length > 0) {
      user = existingUsers[0];

      // =====================================
      // Decide Auth Provider
      // =====================================

      let authProvider = "google";

      if (user.auth_provider === "email") {
        authProvider = "both";
      } else if (user.auth_provider === "both") {
        authProvider = "both";
      }

      // =====================================
      // Update Existing User
      // =====================================

      await db.query(
        `UPDATE users
         SET firebase_uid = ?,
             auth_provider = ?,
             profile_image = ?,
             last_login = NOW(),
             updated_at = NOW()
         WHERE id = ?`,
        [uid, authProvider, picture || user.profile_image, user.id],
      );

      const [updatedUser] = await db.query("SELECT * FROM users WHERE id = ?", [
        user.id,
      ]);

      user = updatedUser[0];
    } else {
      // =====================================
      // Get Default Receptionist Role
      // =====================================

      const [roles] = await db.query(
        "SELECT id FROM roles WHERE role_name = ?",
        ["Receptionist"],
      );

      if (roles.length === 0) {
        return errorResponse(res, "Default role not found", 500);
      }

      const roleId = roles[0].id;

      // =====================================
      // Insert New Google User
      // =====================================

      const [result] = await db.query(
        `INSERT INTO users
        (
          full_name,
          email,
          password,
          firebase_uid,
          auth_provider,
          profile_image,
          role_id,
          last_login
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
        [full_name, email, null, uid, "google", picture || null, roleId],
      );

      const [newUser] = await db.query("SELECT * FROM users WHERE id = ?", [
        result.insertId,
      ]);

      user = newUser[0];
    }

    // =====================================
    // Generate App JWT
    // =====================================

    const token = generateToken(user);

    // =====================================
    // Success Response
    // =====================================

    return successResponse(res, "Google authentication successful", {
      token,
      user: {
        id: user.id,
        firebase_uid: user.firebase_uid,
        full_name: user.full_name,
        email: user.email,
        mobile: user.mobile,
        role_id: user.role_id,
        auth_provider: user.auth_provider,
        profile_image: user.profile_image,
        is_active: user.is_active,
        last_login: user.last_login,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  } catch (error) {
    console.error("Google auth error:", error);

    return errorResponse(res, "Google authentication failed", 401);
  }
};

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

    const [newUser] = await db.query("SELECT * FROM users WHERE id = ?", [
      result.insertId,
    ]);

    user = newUser[0];

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
      u.profile_image,
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
        profile_image: user.profile_image,
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
  googleAuth,
};
