import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    position: 'absolute',
    bottom: '0',
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    borderColor: COLORS.danger,

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
    borderWidth: 2,
    borderColor: COLORS.danger,
  },

  sectionTitle: {
    fontSize: 20,

    fontWeight: '700',

    color: '#111827',
  },

  sectionSubtitle: {
    marginTop: 4,

    marginBottom: 22,

    color: '#6B7280',

    fontSize: 14,
  },

  logoutIconContainer: {
    width: 48,

    height: 48,

    borderRadius: 14,

    backgroundColor: '#FEF2F2',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 10,
  },

  logoutTitle: {
    fontSize: 16,

    fontWeight: '600',

    color: '#111827',
  },

  logoutDescription: {
    color: '#6B7280',
  },
});
