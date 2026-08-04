import React, { useEffect, useRef } from 'react';

import { Animated, Dimensions, Pressable, View } from 'react-native';

import DrawerHeader from './DrawerHeader';
import DrawerMenuCard from './DrawerMenuCard';
import DrawerLogoutButton from './DrawerLogoutButton';

import styles from './AccountDrawerStyles';

const WIDTH = Dimensions.get('window').width;

const DRAWER_WIDTH = WIDTH * 0.84;

const AccountDrawer = ({ visible, user, onDismiss, onMenuPress, onLogout }) => {
  const translateX = useRef(new Animated.Value(DRAWER_WIDTH)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: visible ? 0 : DRAWER_WIDTH,

      duration: 250,

      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onDismiss} />

      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
      >
        <DrawerHeader user={user} onClose={onDismiss} />

        <DrawerMenuCard
          icon="account-circle-outline"
          title="My Profile"
          subtitle="Manage your account"
          onPress={() => {
            onDismiss();
            onMenuPress('profile');
          }}
        />

        <DrawerMenuCard
          icon="office-building-outline"
          title="Hotel Profile"
          subtitle="Hotel information"
          onPress={() => onMenuPress('hotel')}
        />

        <DrawerMenuCard
          icon="account-group-outline"
          title="Staff Management"
          subtitle="Employees & roles"
          onPress={() => onMenuPress('staff')}
        />

        <DrawerMenuCard
          icon="bell-outline"
          title="Notifications"
          subtitle="Alerts & updates"
          onPress={() => onMenuPress('notification')}
        />

        <DrawerMenuCard
          icon="lock-outline"
          title="Change Password"
          subtitle="Security settings"
          onPress={() => onMenuPress('password')}
        />

        <DrawerMenuCard
          icon="cog-outline"
          title="Settings"
          subtitle="Preferences"
          onPress={() => onMenuPress('settings')}
        />

        <View style={styles.logoutContainer}>
          <DrawerLogoutButton onPress={onLogout} />
        </View>
      </Animated.View>
    </View>
  );
};

export default AccountDrawer;
