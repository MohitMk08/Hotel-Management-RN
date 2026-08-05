import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  title: {
    marginTop: 18,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },

  button: {
    marginTop: 28,
    borderRadius: 14,
    minWidth: 210,
  },

  buttonContent: {
    height: 50,
  },

  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
});
