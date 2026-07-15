import axios from 'axios';
// export default apiClient;
import CONFIG from '../constants/config';
/*
|--------------------------------------------------------------------------
| Base URL
|--------------------------------------------------------------------------
| Android Emulator : http://10.0.2.2:5000
| Real Device      : http://YOUR_PC_IP:5000
| iOS Simulator    : http://localhost:5000
|--------------------------------------------------------------------------
*/

const apiClient = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
