import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import StorageService from '../../../services/storageService';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const token = await StorageService.getToken();
      const user = await StorageService.getUser();

      if (token && user) {
        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    } catch (error) {
      navigation.replace('Login');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
      }}
    >
      {/* Logo */}
      <Image
        source={require('../../../assets/logo/hotel-logo.png')}
        style={{
          width: 120,
          height: 120,
          resizeMode: 'contain',
          marginBottom: 25,
        }}
      />

      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          color: '#1F2937',
          marginBottom: 8,
        }}
      >
        Hotel Management
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          fontSize: 16,
          color: '#6B7280',
          marginBottom: 40,
        }}
      >
        Smart Hospitality Management
      </Text>

      {/* Loader */}
      <ActivityIndicator size="large" color="#2563EB" />

      {/* Loading Text */}
      <Text
        style={{
          marginTop: 20,
          fontSize: 15,
          color: '#6B7280',
        }}
      >
        Preparing your workspace...
      </Text>

      {/* Footer */}
      <Text
        style={{
          position: 'absolute',
          bottom: 40,
          fontSize: 12,
          color: '#9CA3AF',
        }}
      >
        Version 1.0.0
      </Text>
    </View>
  );
};

export default SplashScreen;
