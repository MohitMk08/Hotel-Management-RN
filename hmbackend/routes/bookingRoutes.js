const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

// ======================================
// Booking Routes
// ======================================

router.post("/", authMiddleware, createBooking);

router.get("/", authMiddleware, getBookings);

router.get("/:id", authMiddleware, getBookingById);

router.put("/:id", authMiddleware, updateBooking);

module.exports = router;
