import apiClient from './apiClient';

const AuthAPI = {
  // ==========================
  // Register User
  // ==========================
  register: async data => {
    const response = await apiClient.post('/auth/register', data);
    return response.data;
  },

  // ==========================
  // Login User
  // ==========================
  login: async data => {
    const response = await apiClient.post('/auth/login', data);
    return response.data;
  },
};

export default AuthAPI;
