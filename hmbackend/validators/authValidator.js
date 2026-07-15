const validateRegister = (data) => {
  const { full_name, email, mobile, password, confirm_password } = data;

  // Full Name
  if (!full_name || full_name.trim() === "") {
    return {
      isValid: false,
      message: "Full name is required",
    };
  }

  // Email
  if (!email || email.trim() === "") {
    return {
      isValid: false,
      message: "Email is required",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Invalid email address",
    };
  }

  // Mobile
  if (!mobile || mobile.trim() === "") {
    return {
      isValid: false,
      message: "Mobile number is required",
    };
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return {
      isValid: false,
      message: "Invalid mobile number",
    };
  }

  // Password
  if (!password) {
    return {
      isValid: false,
      message: "Password is required",
    };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters",
    };
  }

  // Confirm Password
  if (password !== confirm_password) {
    return {
      isValid: false,
      message: "Passwords do not match",
    };
  }

  return {
    isValid: true,
  };
};

const validateLogin = (data) => {
  const { email, password } = data;

  if (!email || email.trim() === "") {
    return {
      isValid: false,
      message: "Email is required",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: "Invalid email address",
    };
  }

  if (!password || password.trim() === "") {
    return {
      isValid: false,
      message: "Password is required",
    };
  }

  return {
    isValid: true,
  };
};

module.exports = {
  validateRegister,
  validateLogin,
};
