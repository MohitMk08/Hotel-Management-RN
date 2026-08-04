import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import {
  Modal,
  Portal,
  Text,
  IconButton,
  Divider,
  ProgressBar,
  Avatar,
} from 'react-native-paper';

import styles from './ProfileDrawerStyles';
import COLORS from '../../constants/colors';

const MENU_ITEMS = [
  {
    id: 'profile',
    title: 'My Profile',
    icon: 'account-outline',
  },
  {
    id: 'hotel',
    title: 'Hotel Profile',
    icon: 'office-building-outline',
  },
  {
    id: 'password',
    title: 'Change Password',
    icon: 'lock-outline',
  },
  {
    id: 'notification',
    title: 'Notifications',
    icon: 'bell-outline',
  },
];

const ProfileDrawer = ({
  visible,
  onDismiss,

  user = {},

  progress = 0.7,

  missingItems = [],

  onMenuPress,

  onLogout,
}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.overlay}
      >
        <View style={styles.drawer}>
          {/* Avatar */}

          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={onDismiss}>
              <IconButton icon="close" size={22} />
            </TouchableOpacity>

            <Avatar.Icon
              size={82}
              icon="account"
              color="#2563EB"
              style={styles.avatar}
            />

            <Text style={styles.userName}>
              {user?.name || 'Hotel Administrator'}
            </Text>

            <Text style={styles.userRole}>{user?.role || 'Administrator'}</Text>

            <View style={styles.hotelBadge}>
              <Text style={styles.hotelName}>
                {user?.hotel || 'Hotel Paradise'}
              </Text>
            </View>
          </View>

          <Divider style={styles.divider} />

          {/* Menu */}

          <View style={styles.section}>
            {MENU_ITEMS.map(item => (
              <View key={item.id} style={styles.item}>
                <IconButton
                  icon={item.icon}
                  size={22}
                  iconColor="#4B5563"
                  onPress={() => onMenuPress(item.id)}
                />

                <Text
                  style={styles.itemText}
                  onPress={() => onMenuPress(item.id)}
                >
                  {item.title}
                </Text>
              </View>
            ))}
          </View>

          <Divider style={styles.divider} />

          {/* Profile Completion */}

          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>Profile Completion</Text>

            <ProgressBar progress={progress} color={COLORS.primary} />

            <Text
              style={{
                marginTop: 8,
                fontWeight: '700',
              }}
            >
              {Math.round(progress * 100)}% Completed
            </Text>

            {missingItems.length > 0 && (
              <>
                <Text
                  style={{
                    marginTop: 12,
                    color: '#6B7280',
                  }}
                >
                  Missing
                </Text>

                {missingItems.map(item => (
                  <Text
                    key={item}
                    style={{
                      marginTop: 4,
                      color: '#374151',
                    }}
                  >
                    • {item}
                  </Text>
                ))}
              </>
            )}
          </View>

          {/* Logout */}

          <View style={styles.logout}>
            <View style={styles.item}>
              <IconButton
                icon="logout"
                iconColor="#DC2626"
                onPress={onLogout}
              />

              <Text
                style={[
                  styles.itemText,
                  {
                    color: '#DC2626',
                    fontWeight: '700',
                  },
                ]}
                onPress={onLogout}
              >
                Logout
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProfileDrawer;
