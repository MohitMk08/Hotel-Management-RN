const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/responseHandler");

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // console.log("========== AUTH DEBUG ==========");
    // console.log(req.headers.authorization);
    // console.log("===============================");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return errorResponse(res, "Unauthorized", 401);
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      hotel_id: decoded.hotel_id,
      role_id: decoded.role_id,
      email: decoded.email,
    };

    next();
  } catch (error) {
    return errorResponse(res, "Invalid or expired token", 401);
  }
};

module.exports = authMiddleware;
