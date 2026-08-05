import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },

  /* ==========================
        SECTION HEADER
     ========================== */

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },

  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewAllText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 2,
  },

  /* ==========================
        MAIN CONTAINER
     ========================== */

  sectionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  /* ==========================
          BOOKING CARD
     ========================== */

  bookingCard: {
    paddingHorizontal: 18,
    paddingTop: 15,
  },

  lastCard: {
    paddingBottom: 22,
  },

  cardPressed: {
    opacity: 0.92,
  },

  /* ==========================
            HEADER
     ========================== */

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  profileSection: {
    flexDirection: 'row',
    flex: 1,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },

  avatarPlaceholder: {
    backgroundColor: COLORS.surfaceAccent,
  },

  avatarText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 20,
  },

  nameSection: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },

  guestName: {
    fontSize: 14,
    fontWeight: '700',
  },

  roomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  roomName: {
    marginLeft: 6,
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  /* ==========================
          STATUS CHIP
     ========================== */

  statusChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 30,
    marginLeft: 12,
  },

  statusText: {
    marginLeft: 5,
    fontSize: 11,
    fontWeight: '700',
  },

  /* ==========================
            DIVIDER
     ========================== */

  divider: {
    marginVertical: 14,
    height: 1,
    backgroundColor: '#F3F4F6',
  },

  rowDivider: {
    height: 3,
    backgroundColor: '#e0e9fa',
    marginVertical: 10,
    width: 50,
    margin: 'auto',
    borderRadius: 20,
  },

  /* ==========================
            FOOTER
     ========================== */

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerText: {
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },

  // =================
  // empty state
  // =================

  emptyCard: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.black,
  },

  emptySubtitle: {
    marginTop: 8,
    textAlign: 'center',
    color: COLORS.textSecondary,
    fontSize: 13,
    lineHeight: 20,
  },

  addButton: {
    marginTop: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addButtonText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 8,
    fontSize: 14,
  },
});
