import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 32,
  },
  /* ==============================
     HEADER
  ============================== */

  headerContainer: {
    marginBottom: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.textPrimary,
    letterSpacing: -0.5,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.textSecondary,
  },

  /* ==============================
     SECTION CARD
  ============================== */

  sectionCard: {
    backgroundColor: COLORS.surface,

    borderRadius: 22,

    paddingHorizontal: 18,
    paddingVertical: 18,

    marginBottom: 18,

    borderWidth: 1,
    borderColor: COLORS.borderLight,

    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 14,

    elevation: 4,
  },

  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  sectionIconContainer: {
    width: 46,
    height: 46,

    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: COLORS.surfaceAccent,

    marginRight: 14,
  },

  sectionTitleContainer: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: COLORS.textPrimary,
  },

  sectionSubtitle: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 18,
    color: COLORS.textSecondary,
  },

  /* ==============================
     INPUT
  ============================== */

  input: {
    backgroundColor: COLORS.surface,
    marginBottom: 18,
  },

  inputContent: {
    fontSize: 15,
  },

  inputOutline: {
    borderRadius: 16,
    borderWidth: 1.2,
  },

  inputOutlineFocused: {
    borderColor: COLORS.primary,
  },

  label: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 8,
    marginLeft: 2,
  },

  dropdownField: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    marginBottom: 18,
    overflow: 'hidden',
  },

  dropdownContent: {
    height: 56,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  dropdownLabel: {
    fontSize: 15,
    fontWeight: '500',
  },

  /* ==============================
     SELECT
  ============================== */

  selectButton: {
    marginBottom: 14,
    borderRadius: 13,
    borderColor: '#D6DEE9',
  },

  selectContent: {
    height: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  selectLabel: {
    fontSize: 15,
    color: COLORS.textPrimary,
  },

  selectPlaceholder: {
    fontSize: 15,
    color: '#8A96A6',
  },

  /* ==============================
     VIP
  ============================== */

  vipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 18,
    backgroundColor: COLORS.vipBg,
    marginBottom: 20,
  },

  switchContent: {
    flex: 1,
    paddingRight: 12,
  },

  switchLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  switchDescription: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 19,
    color: COLORS.textSecondary,
  },

  /* ==============================
     STEP PROGRESS
  ============================== */

  progressContainer: {
    marginBottom: 24,
  },

  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  progressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  progressValue: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.primary,
  },

  progressTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: COLORS.borderLight,
    overflow: 'hidden',
  },

  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 999,
  },

  stepText: {
    marginTop: 5,

    marginBottom: 12,

    textAlign: 'center',

    fontSize: 12,
    fontWeight: '700',

    color: COLORS.primary,
  },

  /* ==============================
     EMPTY / HELPER
  ============================== */

  helperText: {
    marginTop: -5,
    marginBottom: 14,

    fontSize: 12,

    color: COLORS.textSecondary,
  },

  errorText: {
    marginTop: -7,
    marginBottom: 12,

    fontSize: 12,
    fontWeight: '600',

    color: '#DC3545',
  },

  /* ==============================
     Buttons
  ============================== */

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  primaryButton: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    marginLeft: 10,
  },

  secondaryButton: {
    flex: 1,
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    marginRight: 10,
  },

  // ------------------------------

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: 22,
  },

  genderPill: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 14,

    marginHorizontal: 4,

    borderRadius: 16,

    borderWidth: 1,

    borderColor: COLORS.border,

    backgroundColor: COLORS.surface,
  },

  genderPillActive: {
    borderColor: COLORS.primary,

    backgroundColor: COLORS.surfaceAccent,

    shadowColor: COLORS.primary,

    shadowOpacity: 0.08,

    shadowRadius: 8,

    elevation: 2,
  },

  genderText: {
    marginLeft: 8,

    fontWeight: '600',

    color: COLORS.textSecondary,

    fontSize: 14,
  },

  genderTextActive: {
    color: COLORS.primary,

    fontWeight: '700',
  },
  notesInput: {
    minHeight: 120,
  },
});
