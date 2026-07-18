import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
  },

  headerContainer: {
    height: height * 0.65,
    position: 'relative',
    overflow: 'hidden',
  },

  headerImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
  },

  logoContainer: {
    width: '100%',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    marginVertical: -15,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primaryDark,
    letterSpacing: 1,
  },

  subtitle: {
    marginVertical: 6,
    fontSize: 15,
    color: COLORS.placeholder,
    textAlign: 'center',
    marginBottom: 10,
  },

  loginContainer: {
    marginTop: -240, // Overlap with header image
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#DADCE0',
    borderWidth: 1,
    borderRadius: 15,
    height: 55,
    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  googleText: {
    color: '#3C4043',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 14,
    letterSpacing: 0.25,
  },

  googleIcon: {
    width: 40,
    height: 40,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },

  orText: {
    marginHorizontal: 14,
    color: COLORS.textSecondary,
  },

  input: {
    backgroundColor: '#FFFFFF',
    color: '#000',
    marginBottom: 10,
  },

  outlineStyle: {
    borderRadius: 14,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rememberText: {
    color: COLORS.textPrimary,
  },

  forgotText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  loginButton: {
    marginTop: 10,
    height: 54,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },

  footerText: {
    color: COLORS.textSecondary,
  },

  signupText: {
    color: COLORS.primary,
    fontWeight: '700',
    marginLeft: 5,
  },
  // featureCard: {
  //   marginHorizontal: 20,
  //   marginTop: -20,
  //   borderRadius: 20,
  //   backgroundColor: '#FFFFFF',
  //   paddingVertical: 22,
  //   elevation: 6,

  //   shadowColor: '#000',
  //   shadowOpacity: 0.08,
  //   shadowRadius: 10,
  // },

  // featureContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  // },

  // featureItem: {
  //   width: '30%',
  //   alignItems: 'center',
  // },

  // iconCircle: {
  //   width: 58,
  //   height: 58,
  //   borderRadius: 29,
  //   backgroundColor: '#EFF6FF',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 12,
  // },

  // featureTitle: {
  //   fontSize: 13,
  //   fontWeight: '700',
  //   textAlign: 'center',
  //   color: COLORS.textPrimary,
  // },

  // featureSubTitle: {
  //   marginTop: 4,
  //   fontSize: 11,
  //   textAlign: 'center',
  //   color: COLORS.textSecondary,
  // },
});

export default styles;
