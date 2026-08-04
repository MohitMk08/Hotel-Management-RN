import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  // account drawer section

  overlay: {
    position: 'absolute',

    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',

    zIndex: 999,
  },

  backdrop: {
    flex: 1,

    backgroundColor: 'rgba(15,23,42,0.40)',
  },

  drawer: {
    width: '84%',

    backgroundColor: '#F8FAFC',

    paddingTop: 50,

    paddingHorizontal: 20,

    paddingBottom: 25,

    elevation: 25,

    shadowColor: '#000',

    shadowOpacity: 0.15,

    shadowRadius: 15,

    shadowOffset: {
      width: -3,
      height: 0,
    },
  },

  // menu card
  menuCard: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    paddingHorizontal: 18,

    paddingVertical: 16,

    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    marginBottom: 14,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.05,

    shadowRadius: 8,

    elevation: 2,
  },

  menuLeft: {
    flexDirection: 'row',

    alignItems: 'center',

    flex: 1,
  },

  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuTextContainer: {
    marginLeft: 16,
    flex: 1,
  },

  menuTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  menuSubtitle: {
    marginTop: 3,
    color: '#6B7280',
    fontSize: 13,
  },

  //   header styles--------------

  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F7',
  },

  closeButton: {
    position: 'absolute',

    top: 0,

    right: -8,

    zIndex: 5,
  },

  avatar: {
    backgroundColor: '#EEF4FF',

    borderWidth: 3,

    borderColor: '#D8E8FF',
  },

  userName: {
    marginTop: 18,

    fontSize: 22,

    fontWeight: '700',

    color: '#111827',
  },

  userRole: {
    marginTop: 4,

    fontSize: 15,

    color: '#64748B',
  },

  hotelChip: {
    marginTop: 16,

    backgroundColor: '#EEF4FF',

    paddingHorizontal: 18,

    paddingVertical: 8,

    borderRadius: 30,
  },

  hotelText: {
    color: COLORS.primary,

    fontWeight: '700',

    fontSize: 14,
  },

  // logout comp

  logoutContainer: {
    marginTop: 'auto',

    paddingTop: 20,

    borderTopWidth: 1,

    borderTopColor: '#EEF2F7',
  },

  logoutButton: {
    height: 56,

    borderRadius: 16,

    borderWidth: 1.5,

    borderColor: '#FECACA',

    backgroundColor: '#FEF2F2',

    justifyContent: 'center',

    alignItems: 'center',
  },

  logoutContent: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  logoutText: {
    marginLeft: 10,

    color: '#DC2626',

    fontWeight: '700',

    fontSize: 16,
  },
});
