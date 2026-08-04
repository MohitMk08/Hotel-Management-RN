import apiClient from '../api/apiClient';

const getProfile = async () => {
  const { data } = await apiClient.get('/profile/me');
  return data;
};

const updateProfile = async payload => {
  const { data } = await apiClient.put('/profile/me', payload);
  return data;
};

export default {
  getProfile,
  updateProfile,
};
