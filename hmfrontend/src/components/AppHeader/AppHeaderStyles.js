import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    marginTop: -10,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  menuButton: {
    marginRight: 8,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },

  userName: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 2,
    maxWidth: 170,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationButton: {
    marginRight: 4,
  },

  logoutButton: {
    marginHorizontal: 2,
  },

  badge: {
    position: 'absolute',
    right: 12,
    top: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarPlaceholder: {
    backgroundColor: '#EEF4FF',

    borderWidth: 1,
    borderColor: '#D6E4FF',
  },

  profileButton: {
    marginLeft: 8,

    borderRadius: 22,

    overflow: 'hidden',

    backgroundColor: '#FFFFFF',

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 4,
  },

  iconButton: {
    marginRight: 10,
  },
});
