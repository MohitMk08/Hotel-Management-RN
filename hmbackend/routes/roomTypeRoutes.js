const express = require("express");
const router = express.Router();

const {
  createRoomType,
  getRoomTypes,
  getRoomTypeById,
  updateRoomType,
  deleteRoomType,
} = require("../controllers/roomTypeController");

const authMiddleware = require("../middleware/authMiddleware");

// ==========================
// Room Type Routes
// ==========================

router.post("/", authMiddleware, createRoomType);

router.get("/", authMiddleware, getRoomTypes);

router.get("/:id", authMiddleware, getRoomTypeById);

router.put("/:id", authMiddleware, updateRoomType);

router.delete("/:id", authMiddleware, deleteRoomType);

module.exports = router;
