const profileService = require("../services/profileService");

const { successResponse, errorResponse } = require("../utils/responseHandler");

// ======================================
// Get My Profile
// ======================================

const getProfile = async (req, res) => {
  try {
    const profile = await profileService.getProfile(req.user.id);

    if (!profile) {
      return errorResponse(res, "Profile not found", 404);
    }

    return successResponse(res, "Profile fetched successfully", profile);
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getProfile,
};
