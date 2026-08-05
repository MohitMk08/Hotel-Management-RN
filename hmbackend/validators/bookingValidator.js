const { BOOKING_SOURCE } = require("../constants/bookingConstants");

const validateBooking = (data) => {
  const {
    guest_id,
    room_id,
    check_in_date,
    check_out_date,
    adults,
    children,
    booking_source,
  } = data;

  // ==========================
  // Guest
  // ==========================

  if (!guest_id) {
    return {
      isValid: false,
      message: "Guest is required",
    };
  }

  // ==========================
  // Room
  // ==========================

  if (!room_id) {
    return {
      isValid: false,
      message: "Room is required",
    };
  }

  // ==========================
  // Check In
  // ==========================

  if (!check_in_date) {
    return {
      isValid: false,
      message: "Check-in date is required",
    };
  }

  // ==========================
  // Check Out
  // ==========================

  if (!check_out_date) {
    return {
      isValid: false,
      message: "Check-out date is required",
    };
  }

  // ==========================
  // Date Validation
  // ==========================

  const checkIn = new Date(check_in_date);
  const checkOut = new Date(check_out_date);

  if (checkOut <= checkIn) {
    return {
      isValid: false,
      message: "Check-out date must be after check-in date",
    };
  }

  // ==========================
  // Adults
  // ==========================

  if (!adults || Number(adults) < 1) {
    return {
      isValid: false,
      message: "At least one adult is required",
    };
  }

  // ==========================
  // Children
  // ==========================

  if (children && Number(children) < 0) {
    return {
      isValid: false,
      message: "Children cannot be negative",
    };
  }

  // ==========================
  // Booking Source
  // ==========================

  const allowedSources = Object.values(BOOKING_SOURCE);

  if (booking_source && !allowedSources.includes(booking_source)) {
    return {
      isValid: false,
      message: "Invalid booking source",
    };
  }

  return {
    isValid: true,
  };
};

// ======================================
// Validate Update Booking
// ======================================

const validateUpdateBooking = (data) => {
  // At least one field must be provided
  if (Object.keys(data).length === 0) {
    return {
      isValid: false,
      message: "No data provided for update",
    };
  }

  // Guest
  if (
    data.guest_id !== undefined &&
    (!Number.isInteger(Number(data.guest_id)) || Number(data.guest_id) <= 0)
  ) {
    return {
      isValid: false,
      message: "Valid guest is required",
    };
  }

  // Room
  if (
    data.room_id !== undefined &&
    (!Number.isInteger(Number(data.room_id)) || Number(data.room_id) <= 0)
  ) {
    return {
      isValid: false,
      message: "Valid room is required",
    };
  }

  // Dates
  if (data.check_in_date !== undefined && !data.check_in_date) {
    return {
      isValid: false,
      message: "Check-in date is required",
    };
  }

  if (data.check_out_date !== undefined && !data.check_out_date) {
    return {
      isValid: false,
      message: "Check-out date is required",
    };
  }

  // Adults
  if (data.adults !== undefined && data.adults < 1) {
    return {
      isValid: false,
      message: "At least one adult is required",
    };
  }

  // Children
  if (data.children !== undefined && data.children < 0) {
    return {
      isValid: false,
      message: "Children cannot be negative",
    };
  }

  // Financial Fields
  if (data.discount !== undefined && data.discount < 0) {
    return {
      isValid: false,
      message: "Discount cannot be negative",
    };
  }

  if (data.tax !== undefined && data.tax < 0) {
    return {
      isValid: false,
      message: "Tax cannot be negative",
    };
  }

  if (data.advance_amount !== undefined && data.advance_amount < 0) {
    return {
      isValid: false,
      message: "Advance amount cannot be negative",
    };
  }

  // ==========================
  // Booking Source
  // ==========================

  const allowedSources = Object.values(BOOKING_SOURCE);

  if (
    data.booking_source !== undefined &&
    !allowedSources.includes(data.booking_source)
  ) {
    return {
      isValid: false,
      message: "Invalid booking source",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateBooking,
  validateUpdateBooking,
};
