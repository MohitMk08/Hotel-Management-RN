const roomTypeService = require("../services/roomTypeService");

const { validateRoomType } = require("../validators/roomTypeValidator");

const { successResponse, errorResponse } = require("../utils/responseHandler");

// ======================================
// Create Room Type
// ======================================

const createRoomType = async (req, res) => {
  console.log("REQ BODY:", req.body);
  try {
    const validation = validateRoomType(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const hotel_id = req.user.hotel_id;

    const exists = await roomTypeService.roomTypeExists(
      hotel_id,
      req.body.type_name,
    );

    if (exists) {
      if (exists.is_active === 0) {
        await roomTypeService.reactivateRoomType(exists.id, req.body);

        return successResponse(res, "Room type restored successfully");
      }

      return errorResponse(res, "Room type already exists", 409);
    }

    const roomTypeId = await roomTypeService.createRoomType({
      hotel_id,
      ...req.body,
    });

    return successResponse(
      res,
      "Room type created successfully",
      {
        room_type_id: roomTypeId,
      },
      201,
    );
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get All Room Types
// ======================================

const getRoomTypes = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const roomTypes = await roomTypeService.getRoomTypes(hotel_id);

    return successResponse(res, "Room types fetched successfully", roomTypes);
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get Room Type By Id
// ======================================

const getRoomTypeById = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const roomType = await roomTypeService.getRoomTypeById(
      req.params.id,
      hotel_id,
    );

    if (!roomType) {
      return errorResponse(res, "Room type not found", 404);
    }

    return successResponse(
      res,
      "Room type fetched By ID successfully",
      roomType,
    );
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Update Room Type
// ======================================

const updateRoomType = async (req, res) => {
  try {
    const validation = validateRoomType(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const hotel_id = req.user.hotel_id;

    const roomType = await roomTypeService.getRoomTypeById(
      req.params.id,
      hotel_id,
    );

    if (!roomType) {
      return errorResponse(res, "Room type not found", 404);
    }

    // ==========================
    // Duplicate Name Check
    // ==========================

    const duplicate = await roomTypeService.roomTypeExistsForUpdate(
      hotel_id,
      req.body.type_name,
      req.params.id,
    );

    if (duplicate) {
      return errorResponse(res, "Room type already exists", 409);
    }

    await roomTypeService.updateRoomType(req.params.id, hotel_id, req.body);

    return successResponse(res, "Room type updated successfully");
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Delete Room Type
// ======================================

const deleteRoomType = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const roomType = await roomTypeService.getRoomTypeById(
      req.params.id,
      hotel_id,
    );

    if (!roomType) {
      return errorResponse(res, "Room type not found", 404);
    }

    await roomTypeService.deleteRoomType(req.params.id, hotel_id);

    return successResponse(res, "Room type deleted successfully");
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

module.exports = {
  createRoomType,
  getRoomTypes,
  getRoomTypeById,
  updateRoomType,
  deleteRoomType,
};
