const validateGuest = (data) => {
  const { first_name, mobile } = data;

  if (!first_name || first_name.trim() === "") {
    return {
      isValid: false,
      message: "First Name is required",
    };
  }

  if (!mobile || mobile.trim() === "") {
    return {
      isValid: false,
      message: "Mobile Number is required",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateGuest,
};
