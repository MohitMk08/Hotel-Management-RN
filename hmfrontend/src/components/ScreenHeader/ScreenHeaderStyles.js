import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.WHITE,
  },

  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: COLORS.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    marginLeft: 4,

    fontWeight: '700',

    color: '#111827',
  },

  placeholder: {
    width: 40,
  },
});

export default styles;
