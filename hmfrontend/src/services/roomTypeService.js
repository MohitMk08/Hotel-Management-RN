import apiClient from '../api/apiClient';

const RoomTypeService = {
  getAll: async () => {
    const response = await apiClient.get('/room-types');
    return response.data;
  },

  create: async payload => {
    const response = await apiClient.post('/room-types', payload);
    return response.data;
  },

  update: async (id, payload) => {
    const response = await apiClient.put(`/room-types/${id}`, payload);
    return response.data;
  },

  delete: async id => {
    const response = await apiClient.delete(`/room-types/${id}`);
    return response.data;
  },
};

export default RoomTypeService;
