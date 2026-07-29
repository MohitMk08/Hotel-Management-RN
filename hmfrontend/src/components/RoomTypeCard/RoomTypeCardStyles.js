import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 16,
    elevation: 3,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontWeight: '700',
  },

  price: {
    fontWeight: '700',
    color: '#1565C0',
    fontSize: 16,
  },

  divider: {
    marginVertical: 10,
  },

  details: {
    gap: 8,
  },

  label: {
    fontSize: 14,
    color: '#444',
  },

  description: {
    color: '#777',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default styles;
