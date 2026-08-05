require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/database");

const app = express();

const authRoutes = require("./routes/authRoute");
const roomTypeRoutes = require("./routes/roomTypeRoutes");
const roomRoutes = require("./routes/roomRoutes");
const profileRoutes = require("./routes/profileRoutes");
const guestRoutes = require("./routes/guestRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/room-types", roomTypeRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/guests", guestRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hotel Management Backend Running",
    version: "1.0.0",
  });
});

app.get("/health", async (req, res) => {
  try {
    await db.query("SELECT 1");

    res.json({
      success: true,
      server: "Running",
      database: "Connected",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      database: "Disconnected",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server Running On Port ${PORT}`);
});
