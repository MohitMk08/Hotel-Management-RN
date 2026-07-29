import { StyleSheet } from 'react-native';

import COLORS from '../../constants/colors';

export default StyleSheet.create({
  modal: {
    backgroundColor: '#FFFFFF',

    marginTop: 'auto',

    borderTopLeftRadius: 30,

    borderTopRightRadius: 30,

    paddingHorizontal: 22,

    paddingTop: 18,

    paddingBottom: 24,

    maxHeight: '80%',
  },

  handle: {
    width: 60,

    height: 6,

    borderRadius: 50,

    backgroundColor: '#CBD5E1',

    alignSelf: 'center',

    marginBottom: 18,
  },

  title: {
    fontSize: 22,

    fontWeight: '700',

    color: '#111827',

    marginBottom: 12,
  },

  divider: {
    marginBottom: 18,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 16,

    fontWeight: '700',

    color: '#374151',

    marginBottom: 12,
  },

  chipsContainer: {
    flexDirection: 'row',

    flexWrap: 'wrap',

    justifyContent: 'flex-start',
  },

  chip: {
    marginRight: 12,
    marginBottom: 12,

    borderRadius: 24,

    height: 42,

    justifyContent: 'center',

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#E5E7EB',

    elevation: 0,
  },

  activeChip: {
    backgroundColor: COLORS.primary,

    borderColor: COLORS.primary,
  },

  chipText: {
    fontSize: 14,

    fontWeight: '600',

    color: '#374151',

    paddingHorizontal: 8,
  },

  activeChipText: {
    color: '#FFFFFF',

    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 18,
  },
});
