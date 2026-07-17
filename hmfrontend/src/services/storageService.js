import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  TOKEN: 'hm_token',
  USER: 'hm_user',
};

// ==========================
// Save Session
// ==========================
const saveUserSession = async (token, user) => {
  await AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token);
  await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

// ==========================
// Get Token
// ==========================
const getToken = async () => {
  return await AsyncStorage.getItem(STORAGE_KEYS.TOKEN);
};

// ==========================
// Get User
// ==========================
const getUser = async () => {
  const user = await AsyncStorage.getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null;
};

// ==========================
// Clear Session
// ==========================
const clearSession = async () => {
  await AsyncStorage.removeItem(STORAGE_KEYS.TOKEN);
  await AsyncStorage.removeItem(STORAGE_KEYS.USER);
};

export default {
  saveUserSession,
  getToken,
  getUser,
  clearSession,
};
