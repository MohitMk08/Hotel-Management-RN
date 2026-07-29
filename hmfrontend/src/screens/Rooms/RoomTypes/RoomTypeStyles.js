import { StyleSheet } from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  searchBar: {
    marginHorizontal: 20,
    marginTop: 18,
    marginBottom: 18,
  },

  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 120,
    paddingTop: 20,
  },

  fab: {
    position: 'absolute',
    right: 24,
    bottom: 28,

    backgroundColor: COLORS.primary,

    borderRadius: 30,

    elevation: 8,

    shadowColor: '#2563EB',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },

  sectionHeader: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },

  sectionSubtitle: {
    marginTop: 4,
    color: '#64748B',
  },
});

export default styles;
