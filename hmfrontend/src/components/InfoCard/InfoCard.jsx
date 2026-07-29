import React from 'react';
import { View, Pressable } from 'react-native';
import { Icon, Text } from 'react-native-paper';

import styles from './InfoCardStyles';
import COLORS from '../../constants/colors';

const InfoCard = ({
  title,
  subtitle,
  price,
  capacity,
  bedType,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.leftSection}>
          <View style={styles.iconContainer}>
            <Icon source="bed-outline" size={28} color={COLORS.primary} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>

            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
          </View>
        </View>

        <Text style={styles.price}>₹{price}</Text>
      </View>

      <View style={styles.divider} />

      {/* Info Row */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Capacity</Text>

          <View style={styles.chip}>
            <Text style={styles.chipText}>👥 {capacity} Guests</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Bed Type</Text>

          <View style={styles.chip}>
            <Text style={styles.chipText}>🛏 {bedType || 'Standard'}</Text>
          </View>
        </View>
      </View>

      {/* Description */}
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={[styles.actionButton, styles.editButton]}
          onPress={onEdit}
        >
          <Icon source="pencil" size={20} color={COLORS.primary} />

          <Text style={styles.editText}>Edit</Text>
        </Pressable>

        <Pressable
          style={[styles.actionButton, styles.deleteButton]}
          onPress={onDelete}
        >
          <Icon source="delete" size={20} color="#DC2626" />

          <Text style={styles.deleteText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InfoCard;
