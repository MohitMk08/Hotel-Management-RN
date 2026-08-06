const express = require("express");

const router = express.Router();

const {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
  checkInBooking,
  checkOutBooking,
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

router.patch("/:id/checkin", authMiddleware, checkInBooking);

router.patch("/:id/checkout", authMiddleware, checkOutBooking);

module.exports = router;
