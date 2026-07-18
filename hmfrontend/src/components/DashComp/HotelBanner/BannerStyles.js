import { StyleSheet } from 'react-native';

import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    height: 170,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
  },

  backgroundImage: {
    borderRadius: 10,
    height: 170,
    width: 'auto',
  },

  content: {
    width: '50%',
    paddingLeft: 10,
    zIndex: 2,
  },

  title: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.black,
  },

  titleBlue: {
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 10,
    color: COLORS.textPrimary,
  },

  //   button: {
  //     marginTop: 20,

  //     alignSelf: 'flex-start',

  //     backgroundColor: '#2563EB',

  //     paddingHorizontal: 18,
  //     paddingVertical: 11,

  //     borderRadius: 12,
  //   },

  //   buttonText: {
  //     color: COLORS.white,

  //     fontWeight: '700',

  //     fontSize: 14,
  //   },
});

export default styles;
