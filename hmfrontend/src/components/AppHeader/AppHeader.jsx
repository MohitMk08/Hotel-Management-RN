import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, IconButton, Icon } from 'react-native-paper';

import styles from './AppHeaderStyles';
import getGreeting from '../../utils/greeting';
import COLORS from '../../constants/colors';

const AppHeader = ({
  user,
  onMenuPress,
  onNotificationPress,
  onProfilePress,
  onLogoutPress,
}) => {
  const greeting = getGreeting();

  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon source="menu" size={26} color={COLORS.textPrimary} />
        </TouchableOpacity>

        <View style={styles.greetingRow}>
          <Text style={styles.greeting}>{greeting},</Text>

          <Icon source="hand-wave" size={18} color="#FFC857" />
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon source="bell-outline" size={26} color={COLORS.textPrimary} />
        </TouchableOpacity>

        {/* Temporary Logout */}
        {/* <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.7}
          onPress={onLogoutPress}
        >
          <Icon source="logout" size={26} color={COLORS.textPrimary} />
        </TouchableOpacity> */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onProfilePress}
          style={styles.profileButton}
        >
          {user?.profile_image ? (
            <Avatar.Image size={40} source={{ uri: user.profile_image }} />
          ) : (
            <Avatar.Icon
              size={40}
              icon="account"
              color={COLORS.primary}
              style={styles.avatarPlaceholder}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
