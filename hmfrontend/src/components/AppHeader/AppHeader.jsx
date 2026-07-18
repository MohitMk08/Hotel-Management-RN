import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Avatar, IconButton, Icon } from 'react-native-paper';

import styles from './AppHeaderStyles';
import getGreeting from '../../utils/greeting';

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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onMenuPress}
          style={styles.menuButton}
        >
          <IconButton icon="menu" size={24} />
        </TouchableOpacity>

        <View>
          <Text style={styles.greeting}>
            {greeting},
            <Icon source="hand-wave-outline" size={18} color="#ffc880" />
          </Text>
          <Text style={styles.userName} numberOfLines={1}>
            {user?.full_name || 'Guest'}
          </Text>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.notificationButton}
          onPress={onNotificationPress}
        >
          <IconButton icon="bell-outline" size={22} />
          <View style={styles.badge} />
        </TouchableOpacity>

        {/* Temporary Logout */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.logoutButton}
          onPress={onLogoutPress}
        >
          <IconButton icon="logout" size={22} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={onProfilePress}>
          {user?.profile_image ? (
            <Avatar.Image size={42} source={{ uri: user.profile_image }} />
          ) : (
            <Avatar.Icon
              size={42}
              icon="account"
              style={styles.avatarPlaceholder}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;
