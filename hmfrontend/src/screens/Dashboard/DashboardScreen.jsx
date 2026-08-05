import React, { useState } from 'react';
import styles from './DashboardScreenStyles';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

import {
  statsData,
  quickActionData,
  roomStatusData,
  bookingListData,
} from '../../constants/data';
import COLORS from '../../constants/colors';

import AppHeader from '../../components/AppHeader/AppHeader';
import StatsCard from '../../components/DashComp/StatCards/StatsCard';
import Banner from '../../components/DashComp/HotelBanner/Banner';
import QuickActions from '../../components/DashComp/QuickActions/QuickActions';
import RoomStatus from '../../components/DashComp/RoomStatus/RoomStatus';
import BookingList from '../../components/DashComp/BookingList/BookingList';
import BottomNav from '../../components/BottomNav/BottomNav';
import AccountDrawer from '../../components/AccountDrawer/AccountDrawer';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const [profileVisible, setProfileVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleProfileMenu = menu => {
    // Close the drawer first
    setProfileVisible(false);

    // Wait for drawer close animation
    setTimeout(() => {
      switch (menu) {
        case 'profile':
          navigation.navigate('MyProfile');
          break;

        case 'hotel':
          navigation.navigate('HotelProfile');
          break;

        case 'staff':
          navigation.navigate('StaffManagement');
          break;

        case 'notification':
          navigation.navigate('Notifications');
          break;

        case 'password':
          navigation.navigate('ChangePassword');
          break;

        case 'settings':
          navigation.navigate('Settings');
          break;

        default:
          break;
      }
    }, 250);
  };
  return (
    <SafeAreaView style={styles.sAriaContainer}>
      <StatusBar barStyle="dark-content" animated={true} />
      <View style={styles.container}>
        <AppHeader
          user={user}
          onProfilePress={() => setProfileVisible(true)}
          onMenuPress={() => {}}
          onNotificationPress={() => {}}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* stats section */}
          <View style={styles.statsSection}>
            <StatsCard data={statsData} />
          </View>

          {/* Banner section */}
          <View style={styles.bannerSection}>
            <Banner />
          </View>

          {/* Quick Actions section */}
          <View style={styles.quickSection}>
            <QuickActions data={quickActionData} />
          </View>

          {/* Room status section */}
          <View style={styles.roomStatusSection}>
            <RoomStatus data={roomStatusData} />
          </View>

          <View style={styles.bookingListSection}>
            <BookingList data={bookingListData} />
          </View>
        </ScrollView>
      </View>

      {/* <BottomNav /> */}
      <BottomNav />

      <AccountDrawer
        visible={profileVisible}
        onDismiss={() => setProfileVisible(false)}
        user={{
          name: user?.name,
          role: user?.role,
          hotel: user?.hotel_name,
        }}
        progress={0.7}
        missingItems={['Hotel Logo', 'GST Number', 'Hotel Address']}
        onMenuPress={handleProfileMenu}
        onLogout={handleLogout}
      />
    </SafeAreaView>
  );
};

export default DashboardScreen;
