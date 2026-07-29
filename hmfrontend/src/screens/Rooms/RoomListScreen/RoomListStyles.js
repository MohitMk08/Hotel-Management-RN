import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 15,
  },

  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 4,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  statNumber: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.primary,
  },

  statLabel: {
    marginTop: 4,
    color: '#6B7280',
    fontSize: 13,
    fontWeight: '600',
  },

  listContainer: {
    paddingHorizontal: 18,
    paddingBottom: 120,
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 22,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
  },

  statusList: {
    paddingHorizontal: 16,
    paddingBottom: 5,
  },

  statusCard: {
    width: 110,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginRight: 12,
    borderLeftWidth: 5,
    elevation: 3,
  },

  statusCount: {
    fontSize: 26,

    fontWeight: '700',

    color: '#111827',
  },

  statusTitle: {
    marginTop: 6,

    fontSize: 13,

    color: '#6B7280',
  },
});
