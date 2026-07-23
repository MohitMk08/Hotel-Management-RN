import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

import styles from './BannerStyles';

const Banner = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/Banner-HM.png')}
        resizeMode="cover"
        imageStyle={styles.image}
        style={styles.banner}
      >
        {/* <View style={styles.overlay}> */}
        <View style={styles.content}>
          <Text style={styles.title}>Hotel Room Booking</Text>

          <Text style={styles.titleBlue}>Management System</Text>

          <Text style={styles.subtitle}>
            Manage bookings, rooms, guests and more — all in one place.
          </Text>
        </View>
        {/* </View> */}
      </ImageBackground>
    </View>
  );
};

export default Banner;
