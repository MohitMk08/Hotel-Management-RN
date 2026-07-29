import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,

    marginBottom: 18,
    padding: 18,

    elevation: 5,

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
    marginBottom: 14,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,

    backgroundColor: '#EEF4FF',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 14,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },

  price: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },

  divider: {
    height: 1,
    backgroundColor: '#EDF2F7',
    marginVertical: 14,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoItem: {
    flex: 1,
  },

  infoLabel: {
    fontSize: 12,
    color: '#94A3B8',
    marginBottom: 6,
  },

  chip: {
    alignSelf: 'flex-start',

    backgroundColor: '#EFF6FF',

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,
  },

  chipText: {
    color: COLORS.primary,
    fontSize: 13,
    fontWeight: '600',
  },

  description: {
    marginTop: 16,

    fontSize: 14,
    color: '#64748B',

    lineHeight: 22,
  },

  footer: {
    marginTop: 18,

    paddingTop: 16,

    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: 12,
  },

  editButton: {
    backgroundColor: '#EEF4FF',
  },

  deleteButton: {
    backgroundColor: '#FEF2F2',
  },

  editText: {
    marginLeft: 6,
    color: COLORS.primary,
    fontWeight: '600',
  },

  deleteText: {
    marginLeft: 6,
    color: '#DC2626',
    fontWeight: '600',
  },
});

export default styles;
