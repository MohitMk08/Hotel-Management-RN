// ======================================
// Booking Status
// ======================================

const BOOKING_STATUS = {
  RESERVED: "Reserved",
  CHECKED_IN: "Checked In",
  CHECKED_OUT: "Checked Out",
  CANCELLED: "Cancelled",
};

// ======================================
// Payment Status
// ======================================

const PAYMENT_STATUS = {
  PENDING: "Pending",
  PARTIAL: "Partial",
  PAID: "Paid",
};

// ======================================
// Booking Source
// ======================================

const BOOKING_SOURCE = {
  WALK_IN: "Walk-In",
  ONLINE: "Online",
  PHONE: "Phone",
};

module.exports = {
  BOOKING_STATUS,
  PAYMENT_STATUS,
  BOOKING_SOURCE,
};
