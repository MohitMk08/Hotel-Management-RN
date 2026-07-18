import React, { createContext, useContext, useState, useEffect } from 'react';
import StorageService from '../services/storageService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    restoreSession();
  }, []);

  const restoreSession = async () => {
    try {
      const savedToken = await StorageService.getToken();
      const savedUser = await StorageService.getUser();

      if (savedToken && savedUser) {
        setToken(savedToken);
        setUser(savedUser);
      }
    } catch (e) {
      console.log('Restore Session Error:', e);
    } finally {
      setLoading(false);
    }
  };

  const login = async (newToken, newUser) => {
    await StorageService.saveUserSession(newToken, newUser);

    setToken(newToken);
    setUser(newUser);
  };

  const logout = async () => {
    await StorageService.clearSession();

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        setUser,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
