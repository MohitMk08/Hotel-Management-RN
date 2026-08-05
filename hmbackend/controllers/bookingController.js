const bookingService = require("../services/bookingService");

const {
  validateBooking,
  validateUpdateBooking,
} = require("../validators/bookingValidator");

const { successResponse, errorResponse } = require("../utils/responseHandler");

// ======================================
// Create Booking
// ======================================

const createBooking = async (req, res) => {
  try {
    // ==========================
    // Validate Request
    // ==========================

    const validation = validateBooking(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    // ==========================
    // Prepare Data
    // ==========================

    const bookingData = {
      ...req.body,

      hotel_id: req.user.hotel_id,

      created_by: req.user.id,
    };

    // ==========================
    // Create Booking
    // ==========================

    const booking = await bookingService.createBooking(bookingData);

    return successResponse(res, "Booking created successfully", booking, 201);
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      error.message || "Internal Server Error",
      error.statusCode || 500,
    );
  }
};

// ======================================
// Get All Bookings
// ======================================

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getBookings(req.user.hotel_id);

    return successResponse(res, "Bookings fetched successfully", bookings);
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      error.message || "Internal Server Error",
      error.statusCode || 500,
    );
  }
};

// ======================================
// Get Booking By Id
// ======================================

const getBookingById = async (req, res) => {
  try {
    const booking = await bookingService.getBookingById(
      req.params.id,
      req.user.hotel_id,
    );

    if (!booking) {
      return errorResponse(res, "Booking not found", 404);
    }

    return successResponse(res, "Booking fetched successfully", booking);
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      error.message || "Internal Server Error",
      error.statusCode || 500,
    );
  }
};

// ======================================
// Update Booking
// ======================================

const updateBooking = async (req, res) => {
  try {
    const validation = validateUpdateBooking(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const bookingData = {
      ...req.body,
    };

    const booking = await bookingService.updateBooking(
      req.params.id,
      req.user.hotel_id,
      bookingData,
    );

    return successResponse(res, "Booking updated successfully", booking);
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      error.message || "Internal Server Error",
      error.statusCode || 500,
    );
  }
};

// ======================================
// Cancel Booking
// ======================================

const cancelBooking = async (req, res) => {
  try {
    const booking = await bookingService.cancelBooking(
      req.params.id,
      req.user.hotel_id,
      req.user.id,
      req.body.cancel_reason,
    );

    return successResponse(res, "Booking cancelled successfully", booking);
  } catch (error) {
    console.error(error);

    return errorResponse(
      res,
      error.message || "Internal Server Error",
      error.statusCode || 500,
    );
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  updateBooking,
  cancelBooking,
};
