import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'react-native-paper';

import styles from './GuestCardStyles';

const GuestCard = ({ item, onPress }) => {
  const guestName =
    `${item.first_name || ''} ${item.last_name || ''}`.trim() || 'Guest';

  const initials = guestName
    .split(' ')
    .map(i => i.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>

        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.name}>
            {guestName}
          </Text>

          <Text style={styles.mobile}>{item.mobile}</Text>

          <Text style={styles.code}>{item.guest_code}</Text>
        </View>

        <Icon source="chevron-right" size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default GuestCard;
