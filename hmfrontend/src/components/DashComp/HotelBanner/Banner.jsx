import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import styles from './BannerStyles';

const HotelBanner = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/Banner-HM.png')}
      resizeMode="cover"
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      {/* Content */}

      <View style={styles.content}>
        <Text style={styles.title}>
          Hotel Room Booking
          {'\n'}
          <Text style={styles.titleBlue}>Management System</Text>
        </Text>

        <Text style={styles.subtitle}>
          Manage bookings, rooms, guests and more — all in one place.
        </Text>

        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Dashboard</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>
  );
};

export default HotelBanner;
