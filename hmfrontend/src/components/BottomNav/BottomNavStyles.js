import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: 80,
    paddingVertical: 0,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
    borderRadius: 15,
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '500',
  },

  activeLabel: {
    color: COLORS.primary,
    fontWeight: '700',
  },
});
