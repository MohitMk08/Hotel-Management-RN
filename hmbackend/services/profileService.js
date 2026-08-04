const db = require("../config/database");

// ======================================
// Get Logged In User Profile
// ======================================

const getProfile = async (userId) => {
  const [rows] = await db.query(
    `
    SELECT

        u.id,
        u.firebase_uid,
        u.full_name,
        u.email,
        u.mobile,
        u.profile_image,
        u.auth_provider,
        u.last_login,
        u.created_at,

        r.role_name,

        h.id AS hotel_id,
        h.hotel_name,
        h.hotel_logo

    FROM users u

    INNER JOIN roles r
        ON u.role_id = r.id

    LEFT JOIN hotels h
        ON u.hotel_id = h.id

    WHERE u.id = ?
    LIMIT 1
    `,
    [userId],
  );

  return rows[0];
};

module.exports = {
  getProfile,
};
