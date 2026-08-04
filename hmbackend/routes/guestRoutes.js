const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createGuest,
  getGuests,
  getGuestById,
  updateGuest,
  deleteGuest,
} = require("../controllers/guestController");

router.post("/", authMiddleware, createGuest);

router.get("/", authMiddleware, getGuests);

router.get("/:id", authMiddleware, getGuestById);

router.put("/:id", authMiddleware, updateGuest);

router.delete("/:id", authMiddleware, deleteGuest);

module.exports = router;
