import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },

  card: {
    minWidth: 115,
    height: 125,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    padding: 15,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  value: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.black,
  },

  title: {
    marginTop: 4,
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
    textAlign: 'center',
  },
});
