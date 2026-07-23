export const getBookingStatus = status => {
  switch (status) {
    case 'Confirmed':
      return {
        background: '#DCFCE7',
        color: '#16A34A',
        icon: 'check-circle',
      };

    case 'Pending':
      return {
        background: '#FEF3C7',
        color: '#D97706',
        icon: 'clock-outline',
      };

    case 'Checked In':
      return {
        background: '#DBEAFE',
        color: '#2563EB',
        icon: 'login',
      };

    case 'Checked Out':
      return {
        background: '#EDE9FE',
        color: '#7C3AED',
        icon: 'logout',
      };

    case 'Cancelled':
      return {
        background: '#FEE2E2',
        color: '#DC2626',
        icon: 'close-circle',
      };

    default:
      return {
        background: '#F3F4F6',
        color: '#6B7280',
        icon: 'help-circle',
      };
  }
};
