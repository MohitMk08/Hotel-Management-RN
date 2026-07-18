import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  viewAll: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },

  card: {
    width: 130,
    height: 120,
    marginRight: 16,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,

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
    width: 50,
    height: 50,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',

    color: COLORS.textPrimary,

    textAlign: 'center',
  },
});

export default styles;
