import apiClient from '../api/apiClient';

const getAll = async () => {
  const { data } = await apiClient.get('/rooms');
  return data;
};

const getById = async id => {
  const { data } = await apiClient.get(`/rooms/${id}`);
  return data;
};

const create = async payload => {
  const { data } = await apiClient.post('/rooms', payload);
  return data;
};

const update = async (id, payload) => {
  const { data } = await apiClient.put(`/rooms/${id}`, payload);
  return data;
};

const remove = async id => {
  const { data } = await apiClient.delete(`/rooms/${id}`);
  return data;
};

export default {
  getAll,
  getById,
  create,
  update,
  delete: remove,
};
