import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },

  content: {
    padding: 18,
    paddingBottom: 50,
  },

  imageCard: {
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 22,
    elevation: 3,
    backgroundColor: '#FFF',
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 6,
    marginLeft: 3,
  },

  input: {
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
  },

  saveButton: {
    marginTop: 12,
    height: 55,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },

  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
    marginTop: 10,
  },

  saveButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.white,
  },

  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 40,
    paddingHorizontal: 24,
  },

  placeholderCircle: {
    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: '#EEF4FF',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 20,
  },

  placeholderTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },

  placeholderSubtitle: {
    marginTop: 10,

    textAlign: 'center',

    color: '#6B7280',

    lineHeight: 22,

    fontSize: 15,
  },

  uploadButton: {
    marginTop: 26,

    borderRadius: 14,

    backgroundColor: COLORS.primary,
  },

  uploadButtonLabel: {
    fontWeight: '700',
    color: COLORS.white,
    letterSpacing: 0.5,
  },

  heroCard: {
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    marginBottom: 22,
    elevation: 3,
  },

  heroContent: {
    alignItems: 'center',
    paddingVertical: 34,
    paddingHorizontal: 24,
  },

  heroIcon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EEF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },

  heroTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },

  heroSubtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#6B7280',
    textAlign: 'center',
  },

  sectionCard: {
    marginBottom: 20,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },

  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 18,
  },

  input: {
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },

  outlineStyle: {
    borderRadius: 16,
  },

  saveButton: {
    marginTop: 14,
    marginBottom: 40,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
  },

  saveButtonContent: {
    height: 58,
  },

  saveButtonLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  fieldLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
  },

  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 18,
  },

  statusChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: '#EEF2F7',
    marginRight: 10,
    marginBottom: 10,
  },

  activeStatusChip: {
    backgroundColor: '#2563EB',
  },

  statusChipText: {
    color: '#4B5563',
    fontWeight: '600',
  },

  activeStatusChipText: {
    color: '#FFFFFF',
  },
});

export default styles;
