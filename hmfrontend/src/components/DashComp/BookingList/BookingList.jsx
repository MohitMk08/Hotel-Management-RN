import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

import { Avatar, Icon } from 'react-native-paper';

import styles from './BookingListStyles';
import { getBookingStatus } from '../../../utils/statusUtils';

import EmptyState from '../../EmptyState/EmptyState';
import COLORS from '../../../constants/colors';

const BookingList = ({
  bookings = [],
  title = 'Recent Bookings',
  showViewAll = true,
  onViewAll,
  onPressBooking,
  onAddBooking,
  emptyTitle = 'No Recent Bookings',
  emptySubtitle = 'Bookings will appear here once reservations are created.',
}) => {
  const getInitials = name => {
    if (!name) {
      return '';
    }

    const words = name.trim().split(' ');

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const renderItem = ({ item, index }) => {
    const status = getBookingStatus(item.status);

    return (
      <Pressable
        android_ripple={{
          color: '#EEF4FF',
        }}
        style={({ pressed }) => [
          styles.bookingCard,
          pressed && styles.cardPressed,
          index === bookings.length - 1 && styles.lastCard,
        ]}
      >
        {/* Header */}

        <View style={styles.headerRow}>
          <View style={styles.profileSection}>
            {item.avatar ? (
              <Image
                source={{
                  uri: item.avatar,
                }}
                style={styles.avatar}
              />
            ) : (
              <Avatar.Text
                size={58}
                label={getInitials(item.guest)}
                style={styles.avatarPlaceholder}
                labelStyle={styles.avatarText}
              />
            )}

            <View style={styles.nameSection}>
              <Text numberOfLines={1} style={styles.guestName}>
                {item.guest}
              </Text>

              <View style={styles.roomRow}>
                <Icon source="bed" size={16} color="#6B7280" />

                <Text style={styles.roomName}>{item.room}</Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.statusChip,
              {
                backgroundColor: status.background,
              },
            ]}
          >
            <Icon source={status.icon} size={14} color={status.color} />

            <Text
              style={[
                styles.statusText,
                {
                  color: status.color,
                },
              ]}
            >
              {item.status}
            </Text>
          </View>
        </View>

        {/* Divider */}

        <View style={styles.divider} />

        {/* Footer */}

        <View style={styles.footerRow}>
          <View style={styles.footerItem}>
            <Icon source="calendar-month" size={18} color="#94A3B8" />

            <Text style={styles.footerText}>{item.checkIn}</Text>
          </View>

          <View style={styles.footerItem}>
            <Icon source="identifier" size={18} color="#94A3B8" />

            <Text style={styles.footerText}>#{item.id}</Text>
          </View>
        </View>

        {index !== bookings.length - 1 && <View style={styles.rowDivider} />}
      </Pressable>
    );
  };
  if (bookings.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>

          {showViewAll && (
            <Pressable style={styles.viewAll} onPress={onViewAll}>
              <Text style={styles.viewAllText}>View All</Text>

              <Icon source="chevron-right" size={20} color={COLORS.primary} />
            </Pressable>
          )}
        </View>

        <View style={styles.sectionCard}>
          <EmptyState
            icon="calendar-blank-outline"
            title="No Recent Bookings"
            subtitle="Bookings will appear here once reservations are created."
            buttonTitle="Add Booking"
            onPress={onAddBooking}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Section Header */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>

        {showViewAll && (
          <Pressable style={styles.viewAll} onPress={onViewAll}>
            <Text style={styles.viewAllText}>View All</Text>

            <Icon source="chevron-right" size={20} color="#2563EB" />
          </Pressable>
        )}
      </View>

      {/* Section Body */}

      <View style={styles.sectionCard}>
        <FlatList
          bookings={bookings}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default BookingList;
