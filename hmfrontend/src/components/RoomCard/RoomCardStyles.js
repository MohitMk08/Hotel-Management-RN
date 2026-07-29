import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    padding: 18,

    marginBottom: 18,

    elevation: 4,

    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 12,

    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  header: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
  },

  roomNumber: {
    fontSize: 24,

    fontWeight: '700',

    color: '#111827',
  },

  roomType: {
    marginTop: 4,

    fontSize: 15,

    color: '#6B7280',

    fontWeight: '600',
  },

  statusBadge: {
    paddingHorizontal: 14,

    paddingVertical: 7,

    borderRadius: 20,
  },

  statusText: {
    color: '#FFFFFF',

    fontWeight: '700',

    fontSize: 13,
  },

  priceContainer: {
    marginTop: 20,

    marginBottom: 18,
  },

  priceLabel: {
    color: '#6B7280',

    fontSize: 13,

    marginBottom: 4,
  },

  price: {
    fontSize: 28,

    fontWeight: '700',

    color: COLORS.primary,
  },

  chipContainer: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    marginBottom: 18,
  },

  chip: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F3F6FB',

    borderRadius: 18,

    paddingHorizontal: 12,

    paddingVertical: 8,

    marginRight: 10,

    marginBottom: 10,
  },

  chipText: {
    marginLeft: 6,

    color: '#374151',

    fontWeight: '600',

    fontSize: 13,
  },

  housekeepingRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 16,
  },

  housekeepingLabel: {
    fontSize: 14,

    fontWeight: '600',

    color: '#374151',
  },

  housekeepingBadge: {
    paddingHorizontal: 14,

    paddingVertical: 6,

    borderRadius: 18,
  },

  housekeepingText: {
    color: '#FFFFFF',

    fontWeight: '700',

    fontSize: 13,
  },

  notes: {
    backgroundColor: '#F9FAFB',

    borderRadius: 12,

    padding: 14,

    color: '#4B5563',

    fontSize: 14,

    lineHeight: 22,

    marginBottom: 18,
  },

  footer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  editButton: {
    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#EEF4FF',

    borderRadius: 14,

    paddingVertical: 13,

    marginRight: 8,
  },

  editText: {
    marginLeft: 6,

    color: COLORS.primary,

    fontWeight: '700',

    fontSize: 15,
  },

  deleteButton: {
    flex: 1,

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#FEECEC',

    borderRadius: 14,

    paddingVertical: 13,

    marginLeft: 8,
  },

  deleteText: {
    marginLeft: 6,

    color: '#DC2626',

    fontWeight: '700',

    fontSize: 15,
  },
});
