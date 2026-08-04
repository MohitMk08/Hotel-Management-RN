import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 20,

    padding: 18,

    marginBottom: 16,

    shadowColor: '#000',

    shadowOpacity: 0.08,

    shadowRadius: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  row: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  avatar: {
    width: 54,
    height: 54,

    borderRadius: 27,

    backgroundColor: COLORS.surfaceAccent,

    justifyContent: 'center',

    alignItems: 'center',
  },

  avatarText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: '800',
  },

  info: {
    flex: 1,

    marginLeft: 14,
  },

  name: {
    fontSize: 17,

    fontWeight: '700',

    color: COLORS.textPrimary,
  },

  mobile: {
    marginTop: 3,

    fontSize: 14,

    color: COLORS.textSecondary,
  },

  code: {
    marginTop: 4,

    fontSize: 12,

    color: COLORS.primary,

    fontWeight: '600',
  },
});
