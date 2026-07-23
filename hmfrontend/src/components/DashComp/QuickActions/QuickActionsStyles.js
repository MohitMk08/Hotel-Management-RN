import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 10,
  },

  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },

  viewAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewAll: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
    marginRight: 2,
  },

  listContainer: {
    paddingHorizontal: 3,
    paddingVertical: 10,
  },

  card: {
    minWidth: 110,
    height: 104,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#000',
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 4,
  },

  iconContainer: {
    marginBottom: 12,
  },

  title: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    paddingHorizontal: 6,
  },
});
