import apiClient from './apiClient';

const RoomTypeAPI = {
  // ==========================
  // Get All Room Types
  // ==========================

  getAll: async () => {
    const response = await apiClient.get('/room-types');
    return response.data;
  },

  // ==========================
  // Create Room Type
  // ==========================

  create: async payload => {
    const response = await apiClient.post('/room-types', payload);
    return response.data;
  },

  // ==========================
  // Get Room Type By Id
  // ==========================

  getById: async id => {
    const response = await apiClient.get(`/room-types/${id}`);
    return response.data;
  },

  // ==========================
  // Update Room Type
  // ==========================

  update: async (id, payload) => {
    const response = await apiClient.put(`/room-types/${id}`, payload);
    return response.data;
  },

  // ==========================
  // Delete Room Type
  // ==========================

  delete: async id => {
    const response = await apiClient.delete(`/room-types/${id}`);
    return response.data;
  },
};

export default RoomTypeAPI;
