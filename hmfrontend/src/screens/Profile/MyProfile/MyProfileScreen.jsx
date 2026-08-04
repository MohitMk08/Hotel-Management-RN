import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { Avatar, Text } from 'react-native-paper';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import LoadingView from '../../../components/LoadingView/LoadingView';

import ProfileService from '../../../services/profileService';

import styles from './MyProfileStyles';

const MyProfileScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      setLoading(true);

      const response = await ProfileService.getProfile();

      if (response.success) {
        setProfile(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingView message="Loading Profile..." />;
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="My Profile"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.profileCard}>
          {profile?.profile_image ? (
            <Avatar.Image size={100} source={{ uri: profile.profile_image }} />
          ) : (
            <Avatar.Icon size={100} icon="account" />
          )}

          <Text style={styles.name}>{profile?.full_name}</Text>

          <Text style={styles.role}>{profile?.role_name}</Text>

          <Text style={styles.hotel}>{profile?.hotel_name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyProfileScreen;
