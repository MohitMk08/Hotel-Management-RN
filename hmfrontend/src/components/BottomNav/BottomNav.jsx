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
    screen: 'Rooms',
  },
  {
    name: 'Guests',
    icon: 'account-group',
    screen: 'Guests',
  },
  {
    name: 'More',
    icon: 'view-grid-outline',
    screen: 'More',
  },
];

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const active = route.name === tab.screen;

        return (
          <Pressable
            key={tab.name}
            style={styles.tab}
            android_ripple={{ color: '#EEF4FF' }}
            onPress={() => navigation.navigate(tab.screen)}
          >
            <Icon
              source={tab.icon}
              size={24}
              color={active ? COLORS.primary : '#9CA3AF'}
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
