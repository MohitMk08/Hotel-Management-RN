import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  listContainer: {
    paddingRight: 10,
  },

  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    width: 170,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  divider: {
    width: 2,
    height: 70,
    backgroundColor: '#ECECEC',
    marginHorizontal: 10,
  },

  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  contentBlock: {
    flexDirection: 'column',
    alignItems: 'left',
  },

  count: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },

  label: {
    marginVertical: 3,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
    textAlign: 'left',
    lineHeight: 16,
  },
});
