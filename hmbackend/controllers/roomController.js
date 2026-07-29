const roomService = require("../services/roomService");

const { validateRoom } = require("../validators/roomValidator");

const { successResponse, errorResponse } = require("../utils/responseHandler");

// ======================================
// Create Room
// ======================================

const createRoom = async (req, res) => {
  try {
    // ==========================
    // Validate Request
    // ==========================

    const validation = validateRoom(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    console.log(req.body);

    const hotel_id = req.user.hotel_id;

    // ==========================
    // Check Room Type Exists
    // ==========================

    const roomTypeExists = await roomService.roomTypeExists(
      hotel_id,
      req.body.room_type_id,
    );

    if (!roomTypeExists) {
      return errorResponse(res, "Invalid room type selected", 404);
    }

    // ==========================
    // Check Duplicate Room Number
    // ==========================

    const roomExists = await roomService.roomNumberExists(
      hotel_id,
      req.body.room_number,
    );

    if (roomExists) {
      return errorResponse(res, "Room number already exists", 409);
    }

    // ==========================
    // Create Room
    // ==========================

    const roomId = await roomService.createRoom({
      hotel_id,
      ...req.body,
    });

    return successResponse(
      res,
      "Room created successfully",
      {
        room_id: roomId,
      },
      201,
    );
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get Rooms
// ======================================
const getRooms = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const rooms = await roomService.getRooms(hotel_id);

    return successResponse(res, "Rooms fetched successfully", rooms);
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Get Room By Id
// ======================================

const getRoomById = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const room = await roomService.getRoomById(req.params.id, hotel_id);

    if (!room) {
      return errorResponse(res, "Room not found", 404);
    }

    return successResponse(res, "Room fetched successfully", room);
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Update Room
// ======================================

const updateRoom = async (req, res) => {
  try {
    const validation = validateRoom(req.body);

    if (!validation.isValid) {
      return errorResponse(res, validation.message, 400);
    }

    const hotel_id = req.user.hotel_id;

    const roomTypeExists = await roomService.roomTypeExists(
      hotel_id,
      req.body.room_type_id,
    );

    if (!roomTypeExists) {
      return errorResponse(res, "Invalid room type selected", 404);
    }

    const duplicate = await roomService.roomNumberExistsForUpdate(
      hotel_id,
      req.body.room_number,
      req.params.id,
    );

    if (duplicate) {
      return errorResponse(res, "Room number already exists", 409);
    }

    await roomService.updateRoom(req.params.id, hotel_id, req.body);

    return successResponse(res, "Room updated successfully");
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

// ======================================
// Delete Room
// ======================================

const deleteRoom = async (req, res) => {
  try {
    const hotel_id = req.user.hotel_id;

    const room = await roomService.getRoomById(req.params.id, hotel_id);

    if (!room) {
      return errorResponse(res, "Room not found", 404);
    }

    await roomService.deleteRoom(req.params.id, hotel_id);

    return successResponse(res, "Room deleted successfully");
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
};
