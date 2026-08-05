import React from 'react';
import { View, Pressable, Text } from 'react-native';
import { Icon } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './BottomNavStyles';
import COLORS from '../../constants/colors';

const tabs = [
  {
    name: 'Dashboard',
    icon: 'view-dashboard',
    screen: 'Dashboard',
  },
  {
    name: 'Bookings',
    icon: 'calendar-month',
    screen: 'Bookings',
  },
  {
    name: 'Rooms',
    icon: 'bed-king',
    screen: 'RoomList',
  },
  {
    name: 'Guests',
    icon: 'account-group',
    screen: 'GuestList',
  },
  {
    name: 'More',
    icon: 'view-grid-outline',
    screen: 'Settings',
  },
];

const dashboardRoutes = ['Dashboard'];

const bookingRoutes = [
  'Bookings',
  'AddBooking',
  'BookingDetails',
  'EditBooking',
];

const roomRoutes = [
  'RoomList',
  'AddRoom',
  'RoomDetails',
  'EditRoom',
  'RoomTypeList',
];

const guestRoutes = ['GuestList', 'AddGuest', 'GuestDetails', 'EditGuest'];

const settingsRoutes = ['Settings', 'MyProfile'];

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const active =
          (tab.screen === 'Dashboard' &&
            dashboardRoutes.includes(route.name)) ||
          (tab.screen === 'Bookings' && bookingRoutes.includes(route.name)) ||
          (tab.screen === 'RoomList' && roomRoutes.includes(route.name)) ||
          (tab.screen === 'GuestList' && guestRoutes.includes(route.name)) ||
          (tab.screen === 'Settings' && settingsRoutes.includes(route.name));

        return (
          <Pressable
            key={tab.name}
            style={styles.tab}
            android_ripple={{ color: COLORS.surfaceAccent }}
            onPress={() => {
              if (route.name !== tab.screen) {
                navigation.navigate(tab.screen);
              }
            }}
          >
            <Icon
              source={tab.icon}
              size={24}
              color={active ? COLORS.primary : COLORS.textSecondary}
            />

            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomNav;
