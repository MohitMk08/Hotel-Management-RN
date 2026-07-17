import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StorageService from '../../services/storageService';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const handleLogout = async () => {
    try {
      await StorageService.clearSession();

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.log('Logout Error:', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Dashboard</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: '#EF4444',
          padding: 14,
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '700',
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
