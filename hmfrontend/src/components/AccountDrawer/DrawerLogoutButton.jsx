import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

import styles from './AccountDrawerStyles';

const DrawerLogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={styles.logoutButton}
      onPress={onPress}
    >
      <View style={styles.logoutContent}>
        <Icon source="logout" size={22} color="#DC2626" />

        <Text style={styles.logoutText}>Logout</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerLogoutButton;
