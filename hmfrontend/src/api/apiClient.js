import axios from 'axios';

import CONFIG from '../constants/config';

import StorageService from '../services/storageService';

const apiClient = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/*
|--------------------------------------------------------------------------
| Attach JWT Token Automatically
|--------------------------------------------------------------------------
*/

apiClient.interceptors.request.use(
  async config => {
    const token = await StorageService.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

export default apiClient;
