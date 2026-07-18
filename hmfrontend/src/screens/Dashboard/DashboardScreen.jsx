import React from 'react';
import styles from './DashboardScreenStyles';
import { View, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';

import { statsData, quickActionData } from '../../constants/data';

import AppHeader from '../../components/AppHeader/AppHeader';
import StatsCard from '../../components/DashComp/StatCards/StatsCard';
import Banner from '../../components/DashComp/HotelBanner/Banner';
import QuickActions from '../../components/DashComp/QuickActions/QuickActions';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  // console.log(user);
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" translucent={true} animated={true} />
      <View style={styles.container}>
        <AppHeader
          user={user}
          onMenuPress={() => {}}
          onNotificationPress={() => {}}
          onProfilePress={() => {}}
          onLogoutPress={handleLogout}
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
