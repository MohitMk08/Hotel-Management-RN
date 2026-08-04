import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';

import styles from './AccountDrawerStyles';

const DrawerMenuCard = ({ icon, title, subtitle, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.menuCard}
      onPress={onPress}
    >
      <View style={styles.menuLeft}>
        <View style={styles.menuIcon}>
          <Icon source={icon} size={22} />
        </View>

        <View style={styles.menuTextContainer}>
          <Text style={styles.menuTitle}>{title}</Text>

          <Text style={styles.menuSubtitle}>{subtitle}</Text>
        </View>
      </View>

      <Icon source="chevron-right" size={22} />
    </TouchableOpacity>
  );
};

export default DrawerMenuCard;
