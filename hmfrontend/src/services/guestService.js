import apiClient from '../api/apiClient';

const getAll = async () => {
  const { data } = await apiClient.get('/guests');
  return data;
};

const getById = async id => {
  const { data } = await apiClient.get(`/guests/${id}`);
  return data;
};

const create = async payload => {
  const { data } = await apiClient.post('/guests', payload);
  return data;
};

const update = async (id, payload) => {
  const { data } = await apiClient.put(`/guests/${id}`, payload);
  return data;
};

const remove = async id => {
  const { data } = await apiClient.delete(`/guests/${id}`);
  return data;
};

export default {
  getAll,
  getById,
  create,
  update,
  delete: remove,
};
