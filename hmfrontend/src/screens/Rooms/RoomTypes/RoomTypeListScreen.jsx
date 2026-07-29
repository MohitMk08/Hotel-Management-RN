import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';

import { FAB, Snackbar, Text } from 'react-native-paper';

import styles from './RoomTypeStyles';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import CommonSearchBar from '../../../components/CommonSearchBar/CommonSearchBar';
import RoomTypeCard from '../../../components/RoomTypeCard/RoomTypeCard';
import LoadingView from '../../../components/LoadingView/LoadingView';
import EmptyState from '../../../components/EmptyState/EmptyState';
import RoomTypeForm from '../../../components/RoomTypeForm/RoomTypeForm';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';

import RoomTypeService from '../../../services/roomTypeService';

const RoomTypeListScreen = ({ navigation }) => {
  const [roomTypes, setRoomTypes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const [mode, setMode] = useState('add');

  const [selectedRoomType, setSelectedRoomType] = useState(null);

  const [saveLoading, setSaveLoading] = useState(false);

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const [snackbarMessage, setSnackbarMessage] = useState('');

  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [selectedDeleteItem, setSelectedDeleteItem] = useState(null);

  const [showSearch, setShowSearch] = useState(false);

  // ==========================
  // Load Room Types
  // ==========================

  const loadRoomTypes = async () => {
    try {
      setLoading(true);

      const response = await RoomTypeService.getAll();

      console.log('ROOM TYPES =>', JSON.stringify(response.data, null, 2));

      if (response.success) {
        setRoomTypes(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadRoomTypes();
  }, []);

  // ==========================
  // Pull Refresh
  // ==========================

  const onRefresh = () => {
    setRefreshing(true);
    loadRoomTypes();
  };

  // ==========================
  // Add
  // ==========================

  const handleAdd = () => {
    setMode('add');

    setSelectedRoomType(null);

    setModalVisible(true);
  };

  // ==========================
  // Edit
  // ==========================

  const handleEdit = item => {
    setMode('edit');

    setSelectedRoomType(item);

    setModalVisible(true);
  };

  // ==========================
  // Delete
  // ==========================
  const deleteRoomType = async () => {
    try {
      setDeleteLoading(true);

      const response = await RoomTypeService.delete(selectedDeleteItem.id);

      if (response.success) {
        setSnackbarMessage(response.message);

        setSnackbarVisible(true);

        loadRoomTypes();
      }

      setDeleteDialogVisible(false);

      setSelectedDeleteItem(null);
    } catch (error) {
      Alert.alert(
        'Error',
        error.response?.data?.message || 'Unable to delete Room Type',
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  // ==========================
  // Delete Confirmation
  // ==========================
  // const handleDelete = item => {
  //   Alert.alert('Delete Room Type', `Delete "${item.type_name}"?`, [
  //     {
  //       text: 'Cancel',
  //       style: 'cancel',
  //     },
  //     {
  //       text: 'Delete',
  //       style: 'destructive',
  //       onPress: () => deleteRoomType(item.id),
  //     },
  //   ]);
  // };

  // ==========================
  // Save
  // ==========================

  const handleSave = async payload => {
    try {
      setSaveLoading(true);

      let response;

      if (mode === 'add') {
        response = await RoomTypeService.create(payload);
        console.log('UPDATE RESPONSE =>', JSON.stringify(response, null, 2));

        setSnackbarMessage(response.message);
      } else {
        response = await RoomTypeService.update(selectedRoomType.id, payload);

        setSnackbarMessage(response.message);
      }

      if (response.success) {
        setModalVisible(false);

        await loadRoomTypes();

        setSnackbarVisible(true);
      }
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        error.response?.data?.message || 'Something went wrong',
      );
    } finally {
      setSaveLoading(false);
    }
  };

  // ==========================
  // Search
  // ==========================

  const filteredRoomTypes = roomTypes.filter(item =>
    item.type_name.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return <LoadingView message="Loading Room Types..." />;
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Room Types"
        onBackPress={() => navigation.goBack()}
        rightActions={[
          {
            icon: showSearch ? 'close' : 'magnify',
            onPress: () => {
              setShowSearch(!showSearch);

              if (showSearch) {
                setSearch('');
              }
            },
          },
        ]}
      />

      {showSearch && (
        <CommonSearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search Room Type..."
          autoFocus
        />
      )}

      {filteredRoomTypes.length === 0 ? (
        <EmptyState
          title="No Room Types"
          subtitle="Create your first Room Type"
          buttonTitle="Add Room Type"
          onPress={handleAdd}
        />
      ) : (
        <>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Room Categories</Text>

            <Text style={styles.sectionSubtitle}>
              {filteredRoomTypes.length} Available
            </Text>
          </View>
          <FlatList
            data={filteredRoomTypes}
            keyExtractor={item => item.id.toString()}
            refreshing={refreshing}
            onRefresh={onRefresh}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <RoomTypeCard
                item={item}
                onEdit={() => handleEdit(item)}
                onDelete={() => {
                  setSelectedDeleteItem(item);
                  setDeleteDialogVisible(true);
                }}
              />
            )}
          />
        </>
      )}

      {!modalVisible && (
        <FAB
          icon="plus"
          label="Add Room Type"
          style={styles.fab}
          onPress={handleAdd}
        />
      )}

      <RoomTypeForm
        visible={modalVisible}
        initialData={selectedRoomType}
        onClose={() => setModalVisible(false)}
        onSubmit={handleSave}
        loading={saveLoading}
      />

      <ConfirmDialog
        visible={deleteDialogVisible}
        loading={deleteLoading}
        title="Delete Room Type"
        message={`Are you sure you want to delete "${selectedDeleteItem?.type_name}"?`}
        onCancel={() => {
          setDeleteDialogVisible(false);
          setSelectedDeleteItem(null);
        }}
        onConfirm={deleteRoomType}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
      >
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default RoomTypeListScreen;
