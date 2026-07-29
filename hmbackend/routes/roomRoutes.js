const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

router.post("/", authMiddleware, createRoom);
router.get("/", authMiddleware, getRooms);
router.get("/:id", authMiddleware, getRoomById);
router.put("/:id", authMiddleware, updateRoom);
router.delete("/:id", authMiddleware, deleteRoom);

module.exports = router;
