import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  body: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 24,
  },

  statsSection: {
    height: 150,
    paddingHorizontal: 14,
  },
  bannerSection: {
    height: 200,
    paddingHorizontal: 14,
  },
  quickSection: {
    height: 150,
    paddingHorizontal: 14,
  },
});

export default styles;
