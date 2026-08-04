const guestService = require("../services/guestService");

const { validateGuest } = require("../validators/guestValidator");

const { successResponse, errorResponse } = require("../utils/responseHandler");

// ======================================
// Create Guest
// ======================================

const createGuest = async (req, res) => {
  try {
    const validation = validateGuest(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const hotel_id = req.user.hotel_id;

    const exists = await guestService.guestExists(hotel_id, req.body.mobile);

    if (exists) {
      return errorResponse(
        res,
        "Guest already exists with this mobile number",
        409,
      );
    }

    const guest_code = await guestService.generateGuestCode();

    const guestId = await guestService.createGuest({
      hotel_id,
      guest_code,
      ...req.body,
    });

    return successResponse(
      res,
      "Guest created successfully",
      {
        guest_id: guestId,
      },
      201,
    );
  } catch (error) {
    console.log(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get Guests
// ======================================

const getGuests = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const guests = await guestService.getGuests(hotel_id);

    return successResponse(res, "Guests fetched successfully", guests);
  } catch (error) {
    console.log(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get Guest By Id
// ======================================

const getGuestById = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const guest = await guestService.getGuestById(req.params.id, hotel_id);

    if (!guest) {
      return errorResponse(res, "Guest not found", 404);
    }

    return successResponse(res, "Guest fetched successfully", guest);
  } catch (error) {
    console.log(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Update Guest
// ======================================

const updateGuest = async (req, res) => {
  try {
    const validation = validateGuest(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const hotel_id = req.user.hotel_id;

    const guest = await guestService.getGuestById(req.params.id, hotel_id);

    if (!guest) {
      return errorResponse(res, "Guest not found", 404);
    }

    await guestService.updateGuest(req.params.id, hotel_id, req.body);

    return successResponse(res, "Guest updated successfully");
  } catch (error) {
    console.log(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Delete Guest
// ======================================

const deleteGuest = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const guest = await guestService.getGuestById(req.params.id, hotel_id);

    if (!guest) {
      return errorResponse(res, "Guest not found", 404);
    }

    await guestService.deleteGuest(req.params.id, hotel_id);

    return successResponse(res, "Guest deleted successfully");
  } catch (error) {
    console.log(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

module.exports = {
  createGuest,
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
};
