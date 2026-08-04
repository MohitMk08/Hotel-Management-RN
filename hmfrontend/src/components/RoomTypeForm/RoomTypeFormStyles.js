import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(15,23,42,0.45)',
  },

  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingBottom: 30,
    elevation: 10,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: -4,
    },

    shadowOpacity: 0.08,

    shadowRadius: 12,

    maxHeight: '88%',
  },

  dragHandle: {
    width: 65,
    height: 6,

    borderRadius: 20,
    backgroundColor: '#D1D5DB',
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 20,
  },

  content: {
    paddingHorizontal: 22,
    paddingBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.primaryDark,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 10,
    textAlign: 'center',
    color: COLORS.placeholder,
    fontSize: 15,
    lineHeight: 18,
  },

  sectionTitle: {
    marginBottom: 8,

    fontSize: 14,

    fontWeight: '700',

    color: COLORS.textPrimary,
  },

  input: {
    backgroundColor: '#FFFFFF',

    color: '#000',

    marginBottom: 14,
  },

  outlineStyle: {
    borderRadius: 14,
  },

  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 12,
  },

  cancelButton: {
    width: '46%',
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
  },

  saveButton: {
    width: '50%',
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },

  saveButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },

  cancelButtonLabel: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.danger,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: 12,
    marginTop: -10,
    marginBottom: 12,
    marginLeft: 6,
  },

  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
    marginTop: 10,
  },
});

export default styles;
