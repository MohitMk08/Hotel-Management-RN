import React from 'react';
import { View, Alert } from 'react-native';
import { Card, List, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../context/AuthContext';

import ScreenHeader from '../../components/ScreenHeader/ScreenHeader';

import styles from './SettingsScreenStyles.js';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();

          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Settings"
        subtitle="Application preferences"
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Security</Text>

            <Text style={styles.sectionSubtitle}>Keep your account secure</Text>

            <List.Item
              title="Logout"
              description="Sign out from this device"
              titleStyle={styles.logoutTitle}
              descriptionStyle={styles.logoutDescription}
              left={() => (
                <View style={styles.logoutIconContainer}>
                  <List.Icon icon="logout" color="#DC2626" />
                </View>
              )}
              right={() => <List.Icon icon="chevron-right" color="#94A3B8" />}
              onPress={handleLogout}
            />
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default SettingsScreen;
