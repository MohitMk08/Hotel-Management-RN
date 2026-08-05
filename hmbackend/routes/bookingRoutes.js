const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
} = require("../controllers/bookingController");

const authMiddleware = require("../middleware/authMiddleware");

// ======================================
// Booking Routes
// ======================================

router.post("/", authMiddleware, createBooking);

router.get("/", authMiddleware, getBookings);

router.get("/:id", authMiddleware, getBookingById);

router.put("/:id", authMiddleware, updateBooking);

router.patch("/:id/cancel", authMiddleware, cancelBooking);

module.exports = router;
