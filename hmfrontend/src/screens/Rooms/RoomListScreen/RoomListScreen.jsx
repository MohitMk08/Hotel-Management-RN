import React, { useState, useCallback } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { FAB, Snackbar, Text } from 'react-native-paper';

import styles from './RoomListStyles';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import CommonSearchBar from '../../../components/CommonSearchBar/CommonSearchBar';
import LoadingView from '../../../components/LoadingView/LoadingView';
import EmptyState from '../../../components/EmptyState/EmptyState';
import RoomCard from '../../../components/RoomCard/RoomCard';
import FilterBottomSheet from '../../../components/FilterBottomSheet/FilterBottomSheet';

import RoomService from '../../../services/roomService';

const STATUS_LIST = [
  {
    title: 'Available',
    color: '#10B981',
  },
  {
    title: 'Occupied',
    color: '#EF4444',
  },
  {
    title: 'Reserved',
    color: '#F59E0B',
  },
  {
    title: 'Maintenance',
    color: '#6366F1',
  },
  {
    title: 'Out of Service',
    color: '#64748B',
  },
];

const ROOM_STATUS = [
  'Available',
  'Occupied',
  'Reserved',
  'Maintenance',
  'Out of Service',
];

const ROOM_VIEW = ['City', 'Pool', 'Garden', 'Sea', 'Mountain', 'None'];

const HOUSEKEEPING = ['Clean', 'Dirty', 'Inspection', 'Cleaning'];

const RoomListScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('');

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [showSearch, setShowSearch] = useState(false);

  const [filterVisible, setFilterVisible] = useState(false);

  const [filters, setFilters] = useState({
    status: '',
    view: '',
    housekeeping: '',
  });

  // ===========================
  // Load Rooms
  // ===========================

  const loadRooms = async () => {
    try {
      setLoading(true);

      const response = await RoomService.getAll();

      if (response.success) {
        setRooms(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);

      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadRooms();
    }, []),
  );

  // ===========================
  // Refresh
  // ===========================

  const onRefresh = () => {
    setRefreshing(true);

    loadRooms();
  };

  // ===========================
  // Delete
  // ===========================

  const handleDelete = item => {
    Alert.alert('Delete Room', `Delete Room ${item.room_number}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            const response = await RoomService.delete(item.id);

            if (response.success) {
              setSnackbarMessage('Room Deleted Successfully');

              setSnackbarVisible(true);

              loadRooms();
            }
          } catch (error) {
            Alert.alert(
              'Error',
              error.response?.data?.message || 'Unable to delete room',
            );
          }
        },
      },
    ]);
  };

  // ===========================
  // Edit
  // ===========================

  const handleEdit = room => {
    navigation.navigate('AddRoom', {
      mode: 'edit',
      room,
    });
  };

  // ===========================
  // Add
  // ===========================

  const handleAdd = () => {
    navigation.navigate('AddRoom', {
      mode: 'add',
    });
  };

  // ===========================
  // Search
  // ===========================

  const statusData = STATUS_LIST.map(item => ({
    ...item,
    count: rooms.filter(room => room.room_status === item.title).length,
  }));

  const filteredRooms = rooms.filter(item => {
    const matchesSearch =
      item.room_number.toLowerCase().includes(search.toLowerCase()) ||
      item.type_name.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      !filters.status || item.room_status === filters.status;

    const matchesView = !filters.view || item.room_view === filters.view;

    const matchesHousekeeping =
      !filters.housekeeping ||
      item.housekeeping_status === filters.housekeeping;

    return matchesSearch && matchesStatus && matchesView && matchesHousekeeping;
  });

  // ---------------------
  //  filter hepler
  // ---------------------

  const handleFilterSelect = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }));
  };

  if (loading) {
    return <LoadingView message="Loading Rooms..." />;
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Rooms"
        onBackPress={() => navigation.goBack()}
        rightActions={[
          {
            icon: showSearch ? 'close' : 'magnify',
            onPress: () => setShowSearch(!showSearch),
          },
          {
            icon: 'tune-variant',
            onPress: () => setFilterVisible(true),
          },
        ]}
      />
      {showSearch && (
        <CommonSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search Room..."
          autoFocus
        />
      )}
      {/* Statistics */}
      <View style={styles.statsContainer}>
        <FlatList
          horizontal
          data={statusData}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statusList}
          renderItem={({ item }) => (
            <View
              style={[
                styles.statusCard,
                {
                  borderLeftColor: item.color,
                },
              ]}
            >
              <Text style={styles.statusCount}>{item.count}</Text>

              <Text style={styles.statusTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      {filteredRooms.length === 0 ? (
        <EmptyState
          title="No Rooms"
          subtitle="Create your first room"
          buttonTitle="Add Room"
          onPress={handleAdd}
        />
      ) : (
        <FlatList
          data={filteredRooms}
          keyExtractor={item => item.id.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <RoomCard
              item={item}
              onEdit={() => handleEdit(item)}
              onDelete={() => handleDelete(item)}
            />
          )}
        />
      )}
      <FAB
        icon="plus"
        label="Add Room"
        style={styles.fab}
        onPress={handleAdd}
      />

      <FilterBottomSheet
        visible={filterVisible}
        onDismiss={() => setFilterVisible(false)}
        title="Filter Rooms"
        sections={[
          {
            key: 'status',
            title: 'Room Status',
            options: ROOM_STATUS,
          },
          {
            key: 'view',
            title: 'Room View',
            options: ROOM_VIEW,
          },
          {
            key: 'housekeeping',
            title: 'Housekeeping',
            options: HOUSEKEEPING,
          },
        ]}
        selected={filters}
        onSelect={handleFilterSelect}
        onReset={() => {
          setFilters({
            status: '',
            view: '',
            housekeeping: '',
          });
        }}
        onApply={() => {
          setFilterVisible(false);
        }}
      />
      <Snackbar
        visible={snackbarVisible}
        duration={2000}
        onDismiss={() => setSnackbarVisible(false)}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default RoomListScreen;
