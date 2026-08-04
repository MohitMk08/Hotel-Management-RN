import React from 'react';
import { View } from 'react-native';
import { Avatar, IconButton, Text } from 'react-native-paper';

import styles from './AccountDrawerStyles';
import COLORS from '../../constants/colors';

const DrawerHeader = ({ user, onClose }) => {
  return (
    <View style={styles.headerContainer}>
      <IconButton
        icon="close"
        size={22}
        style={styles.closeButton}
        onPress={onClose}
      />
      <Avatar.Icon
        size={86}
        icon="account"
        style={styles.avatar}
        color={COLORS.primary}
      />
      <Text style={styles.userName}>{user?.name || 'Hotel Administrator'}</Text>
      <Text style={styles.userRole}>{user?.role || 'Administrator'}</Text>
      <View style={styles.hotelChip}>
        <Text style={styles.hotelText}>{user?.hotel_name || 'Hotel'}</Text>
      </View>
    </View>
  );
};

export default DrawerHeader;
