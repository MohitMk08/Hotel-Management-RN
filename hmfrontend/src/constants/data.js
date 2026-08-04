import COLORS from './colors';

export const statsData = [
  {
    id: '1',
    title: 'Rooms',
    value: '120',
    icon: 'bed',
    color: COLORS.primary,
  },
  {
    id: '2',
    title: 'Guests',
    value: '84',
    icon: 'account-group',
    color: COLORS.success,
  },
  {
    id: '3',
    title: 'Bookings',
    value: '26',
    icon: 'calendar-check',
    color: COLORS.warning,
  },
  {
    id: '4',
    title: 'Revenue',
    value: '₹48K',
    icon: 'cash-multiple',
    color: COLORS.danger,
  },
];

export const quickActionData = [
  {
    id: '1',
    title: 'Room Types',
    icon: 'bed-outline',
    color: COLORS.primary,
    screen: 'RoomTypeList',
  },
  {
    id: '2',
    title: 'Rooms',
    icon: 'door',
    color: COLORS.success,
    screen: 'RoomList',
  },
  {
    id: '3',
    title: 'Guests',
    icon: 'account-group-outline',
    color: '#8B5CF6',
    screen: 'GuestList',
  },
  {
    id: '4',
    title: 'Bookings',
    icon: 'calendar-check-outline',
    color: COLORS.warning,
    screen: '',
  },
  {
    id: '5',
    title: 'Staff',
    icon: 'badge-account-outline',
    color: COLORS.danger,
    screen: '',
  },
];

export const roomStatusData = [
  {
    id: '1',
    title: 'Occupied',
    value: 38,
    icon: 'bed',
    color: '#2563EB',
  },
  {
    id: '2',
    title: 'Vacant',
    value: 8,
    icon: 'door-open',
    color: '#22C55E',
  },
  {
    id: '3',
    title: 'Cleaning',
    value: 3,
    icon: 'broom',
    color: '#F59E0B',
  },
  {
    id: '4',
    title: 'Maintenance',
    value: 1,
    icon: 'hammer-wrench',
    color: '#64748B',
  },
  {
    id: '5',
    title: 'Reserved',
    value: 12,
    icon: 'calendar-clock',
    color: '#8B5CF6',
  },
  {
    id: '6',
    title: 'Blocked',
    value: 2,
    icon: 'cancel',
    color: '#EF4444',
  },
  {
    id: '7',
    title: 'Out of Service',
    value: 1,
    icon: 'alert-octagon',
    color: '#DC2626',
  },
  {
    id: '8',
    title: 'Inspection',
    value: 4,
    icon: 'clipboard-search',
    color: '#0EA5E9',
  },
  {
    id: '9',
    title: 'Deep Cleaning',
    value: 2,
    icon: 'spray-bottle',
    color: '#14B8A6',
  },
  {
    id: '10',
    title: 'VIP Reserved',
    value: 5,
    icon: 'crown',
    color: '#EAB308',
  },
];

export const bookingListData = [
  {
    id: 'BK1021',
    guest: 'John Doe',
    room: 'Deluxe Room',
    checkIn: 'Today',
    status: 'Confirmed',
    avatar: '',
  },
  {
    id: 'BK1022',
    guest: 'Sarah Wilson',
    room: 'Executive Room',
    checkIn: 'Tomorrow',
    status: 'Pending',
    avatar: '',
  },
  {
    id: 'BK1023',
    guest: 'Michael Brown',
    room: 'Suite Room',
    checkIn: '22 Jul',
    status: 'Checked In',
    avatar: '',
  },
  {
    id: 'BK1024',
    guest: 'Emma Johnson',
    room: 'Premium Suite',
    checkIn: '23 Jul',
    status: 'Confirmed',
    avatar: '',
  },
  {
    id: 'BK1025',
    guest: 'David Wilson',
    room: 'Standard Room',
    checkIn: '24 Jul',
    status: 'Checked Out',
    avatar: '',
  },
];
