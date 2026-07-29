const validateRoomType = (data) => {
  const { type_name, max_capacity, base_price, description } = data;

  // ==========================
  // Type Name
  // ==========================

  if (!type_name || type_name.trim() === "") {
    return {
      isValid: false,
      message: "Room type name is required",
    };
  }

  if (type_name.trim().length < 2) {
    return {
      isValid: false,
      message: "Room type name is too short",
    };
  }

  // ==========================
  // Capacity
  // ==========================

  if (
    max_capacity === undefined ||
    max_capacity === null ||
    Number(max_capacity) <= 0
  ) {
    return {
      isValid: false,
      message: "Maximum capacity must be greater than 0",
    };
  }

  // ==========================
  // Base Price
  // ==========================

  if (
    base_price === undefined ||
    base_price === null ||
    Number(base_price) < 0
  ) {
    return {
      isValid: false,
      message: "Base price cannot be negative",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateRoomType,
};
