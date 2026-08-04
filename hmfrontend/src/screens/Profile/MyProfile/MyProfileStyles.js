import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  content: {
    padding: 20,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 22,

    paddingVertical: 30,

    alignItems: 'center',

    elevation: 4,
  },

  name: {
    marginTop: 18,

    fontSize: 22,

    fontWeight: '700',

    color: '#111827',
  },

  role: {
    marginTop: 4,

    color: '#64748B',

    fontSize: 15,
  },

  hotel: {
    marginTop: 8,

    color: COLORS.primary,

    fontWeight: '600',
  },
});
