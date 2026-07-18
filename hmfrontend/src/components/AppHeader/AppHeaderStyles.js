import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: 72,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 14,

    backgroundColor: COLORS.background,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuButton: {
    marginRight: 5,
  },

  greeting: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },

  userName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primaryLight,
    marginTop: 2,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationButton: {
    marginRight: 12,
  },

  badge: {
    position: 'absolute',
    right: 14,
    top: 12,

    width: 9,
    height: 9,
    borderRadius: 5,

    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: COLORS.white,
  },

  avatarPlaceholder: {
    backgroundColor: '#E5E7EB',
  },

  logoutButton: {
    marginRight: 4,
  },
});
