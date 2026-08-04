import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  listContainer: {
    padding: 16,
    paddingBottom: 120,
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    borderRadius: 30,
  },
});
