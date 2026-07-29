const validateRoom = (data) => {
  const { room_type_id, room_number, floor_no, room_view } = data;

  if (!room_type_id) {
    return {
      isValid: false,
      message: "Room Type is required",
    };
  }

  if (!room_number || room_number.trim() === "") {
    return {
      isValid: false,
      message: "Room Number is required",
    };
  }

  if (floor_no === undefined || floor_no === null) {
    return {
      isValid: false,
      message: "Floor Number is required",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateRoom,
};
