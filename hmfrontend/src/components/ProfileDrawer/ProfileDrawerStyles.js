import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.35)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  drawer: {
    width: '84%',
    height: '100%',
    backgroundColor: '#FFFFFF',

    paddingTop: 52,
    paddingHorizontal: 20,

    elevation: 12,
  },

  closeButton: {
    position: 'absolute',
    right: 12,
    top: 8,
    zIndex: 20,
  },

  header: {
    alignItems: 'center',
    paddingBottom: 26,
  },

  avatar: {
    backgroundColor: '#EEF4FF',

    borderWidth: 2,
    borderColor: '#D8E8FF',
  },

  userName: {
    marginTop: 18,

    fontSize: 22,
    fontWeight: '700',

    color: '#111827',
  },

  userRole: {
    marginTop: 5,

    fontSize: 15,

    color: '#6B7280',
  },

  hotelBadge: {
    marginTop: 14,

    paddingHorizontal: 20,
    paddingVertical: 8,

    backgroundColor: '#EEF4FF',

    borderRadius: 30,
  },

  hotelName: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 14,
  },

  divider: {
    marginVertical: 18,
    backgroundColor: '#E5E7EB',
  },

  section: {
    marginTop: 4,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: 14,

    borderRadius: 14,

    paddingHorizontal: 8,
  },

  itemText: {
    marginLeft: 12,

    fontSize: 16,

    color: '#374151',

    fontWeight: '600',
  },

  progressCard: {
    marginTop: 18,

    backgroundColor: '#F8FAFC',

    borderRadius: 18,

    padding: 18,
  },

  progressTitle: {
    fontSize: 16,

    fontWeight: '700',

    color: '#111827',

    marginBottom: 12,
  },

  progressText: {
    marginTop: 10,

    fontWeight: '700',

    color: COLORS.primary,
  },

  missingTitle: {
    marginTop: 16,

    fontWeight: '700',

    color: '#111827',
  },

  missingItem: {
    marginTop: 8,

    color: '#4B5563',

    fontSize: 14,
  },

  logoutContainer: {
    marginTop: 'auto',
    marginBottom: 30,
  },
});
