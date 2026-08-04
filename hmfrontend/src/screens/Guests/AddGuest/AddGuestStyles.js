import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: -50,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 16,

    borderTopWidth: 1,
    borderTopColor: '#ECECEC',

    backgroundColor: '#FFFFFF',
  },

  backButton: {
    flex: 1,
    marginRight: 10,
    borderRadius: 14,
  },

  nextButton: {
    flex: 1,
    borderRadius: 14,
  },
});
