import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  sAriaContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: 70,
  },

  statsSection: {
    marginTop: 6,
  },

  bannerSection: {
    marginTop: 10,
  },

  quickSection: {
    marginTop: 10,
  },

  roomStatusSection: {
    marginTop: 10,
    marginBottom: 10,
  },

  bookingListSection: {
    marginTop: 10,
    marginBottom: 12,
  },
});

export default styles;
