import React from 'react';
import { View, Pressable } from 'react-native';
import { Icon, Text } from 'react-native-paper';

import styles from './RoomCardStyles';
import COLORS from '../../constants/colors';

const RoomCard = ({ item, onEdit, onDelete }) => {
  const getRoomStatusColor = status => {
    switch (status) {
      case 'Available':
        return '#10B981';

      case 'Occupied':
        return '#EF4444';

      case 'Reserved':
        return '#F59E0B';

      case 'Maintenance':
        return '#6B7280';

      default:
        return COLORS.primary;
    }
  };

  const getHousekeepingColor = status => {
    switch (status) {
      case 'Clean':
        return '#10B981';

      case 'Dirty':
        return '#EF4444';

      case 'Inspection':
        return '#3B82F6';

      case 'Cleaning':
        return '#F59E0B';

      default:
        return '#6B7280';
    }
  };

  return (
    <View style={styles.card}>
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.roomNumber}>Room {item.room_number}</Text>

          <Text style={styles.roomType}>{item.type_name}</Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getRoomStatusColor(item.room_status),
            },
          ]}
        >
          <Text style={styles.statusText}>{item.room_status}</Text>
        </View>
      </View>

      {/* Price */}

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Base Price</Text>

        <Text style={styles.price}>₹ {Number(item.base_price).toFixed(2)}</Text>
      </View>

      {/* Chips */}

      <View style={styles.chipContainer}>
        <View style={styles.chip}>
          <Icon
            source="account-group-outline"
            size={16}
            color={COLORS.primary}
          />
          <Text style={styles.chipText}>{item.max_capacity} Guests</Text>
        </View>

        <View style={styles.chip}>
          <Icon
            source="office-building-outline"
            size={16}
            color={COLORS.primary}
          />
          <Text style={styles.chipText}>Floor {item.floor_no}</Text>
        </View>

        <View style={styles.chip}>
          <Icon source="image-outline" size={16} color={COLORS.primary} />
          <Text style={styles.chipText}>{item.room_view}</Text>
        </View>
      </View>

      {/* Housekeeping */}

      <View style={styles.housekeepingRow}>
        <Text style={styles.housekeepingLabel}>Housekeeping</Text>

        <View
          style={[
            styles.housekeepingBadge,
            {
              backgroundColor: getHousekeepingColor(item.housekeeping_status),
            },
          ]}
        >
          <Text style={styles.housekeepingText}>
            {item.housekeeping_status}
          </Text>
        </View>
      </View>

      {/* Notes */}

      {item.notes ? <Text style={styles.notes}>{item.notes}</Text> : null}

      {/* Footer */}

      <View style={styles.footer}>
        <Pressable style={styles.editButton} onPress={onEdit}>
          <Icon source="pencil" size={18} color={COLORS.primary} />

          <Text style={styles.editText}>Edit</Text>
        </Pressable>

        <Pressable style={styles.deleteButton} onPress={onDelete}>
          <Icon source="delete" size={18} color="#DC2626" />

          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RoomCard;
