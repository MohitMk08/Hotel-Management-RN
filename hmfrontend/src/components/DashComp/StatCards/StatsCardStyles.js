import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  listContainer: {
    Height: 150,
    paddingVertical: 10,
  },

  card: {
    minWidth: 120,
    maxWidth: 160,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginRight: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 3,
  },

  value: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
  },

  title: {
    marginTop: 6,
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});

export default styles;
