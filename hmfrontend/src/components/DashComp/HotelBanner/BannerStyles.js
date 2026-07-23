import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },

  banner: {
    height: 170,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    padding: 0,

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },

  // image: {
  //   borderRadius: 20,
  // },

  // overlay: {
  //   // flex: 1,
  //   justifyContent: 'center',
  //   paddingHorizontal: 18,
  //   backgroundColor: 'rgba(255,255,255,.08)',
  // },

  content: {
    width: '50%',
    marginTop: 15,
    marginLeft: 15,
  },

  title: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.black,
  },

  titleBlue: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 6,
    fontSize: 10,
    lineHeight: 14,
    color: COLORS.textPrimary,
  },
});
