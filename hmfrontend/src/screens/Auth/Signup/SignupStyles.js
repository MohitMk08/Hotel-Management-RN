import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../../constants/colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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

  signupContainer: {
    marginTop: -240,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 25,

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },

  logoContainer: {
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    marginVertical: -15,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.primaryDark,
    letterSpacing: 0.5,
  },

  subtitle: {
    marginVertical: 6,
    fontSize: 15,
    color: COLORS.placeholder,
    textAlign: 'center',
  },

  outlineStyle: {
    borderRadius: 14,
  },

  input: {
    backgroundColor: '#FFFFFF',
    color: '#000',
    marginBottom: 10,
  },

  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  termsText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  signupButton: {
    height: 55,
    borderRadius: 15,

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 4,

    shadowColor: '#2563EB',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.6,
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
    marginHorizontal: 12,
    color: COLORS.textSecondary,
    fontWeight: '600',
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

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 25,
  },

  footerText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },

  loginText: {
    marginLeft: 6,
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default styles;
