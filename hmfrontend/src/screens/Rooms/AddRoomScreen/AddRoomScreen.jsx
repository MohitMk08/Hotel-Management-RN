import React, { useEffect, useState } from 'react';
import { ScrollView, View, Alert, Pressable } from 'react-native';

import { Button, Card, Menu, Text, TextInput, Icon } from 'react-native-paper';

import styles from './AddRoomStyles';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';

import RoomService from '../../../services/roomService';
import RoomTypeService from '../../../services/roomTypeService';

const ROOM_STATUS = [
  'Available',
  'Occupied',
  'Reserved',
  'Maintenance',
  'Out of Service',
];

const HOUSEKEEPING = ['Clean', 'Dirty', 'Inspection', 'Cleaning'];

const ROOM_VIEW = ['City', 'Pool', 'Garden', 'Sea', 'Mountain', 'None'];

const AddRoomScreen = ({ navigation, route }) => {
  const mode = route.params?.mode || 'add';
  const room = route.params?.room;

  const [loading, setLoading] = useState(false);

  const [roomTypes, setRoomTypes] = useState([]);

  const [roomTypeVisible, setRoomTypeVisible] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);
  const [houseVisible, setHouseVisible] = useState(false);
  const [viewVisible, setViewVisible] = useState(false);

  const [form, setForm] = useState({
    room_type_id: null,
    room_number: '',
    floor_no: '',
    room_view: 'None',
    room_status: 'Available',
    housekeeping_status: 'Clean',
    notes: '',
  });

  useEffect(() => {
    loadRoomTypes();

    if (room) {
      setForm({
        room_type_id: Number(room.room_type_id),
        room_number: room.room_number,
        floor_no: String(room.floor_no),
        room_view: room.room_view,
        room_status: room.room_status,
        housekeeping_status: room.housekeeping_status,
        notes: room.notes || '',
      });
    }
  }, []);

  const loadRoomTypes = async () => {
    try {
      const response = await RoomTypeService.getAll();

      if (response.success) {
        setRoomTypes(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updateField = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveRoom = async () => {
    if (!form.room_type_id) {
      return Alert.alert('Validation', 'Select Room Type');
    }

    if (!form.room_number.trim()) {
      return Alert.alert('Validation', 'Enter Room Number');
    }

    if (!form.floor_no.trim()) {
      return Alert.alert('Validation', 'Enter Floor Number');
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        floor_no: Number(form.floor_no),
      };

      console.log('Payload:', payload);

      const response =
        mode === 'add'
          ? await RoomService.create(payload)
          : await RoomService.update(room.id, payload);

      if (response.success) {
        navigation.navigate({
          name: 'RoomList',
          params: {
            refresh: true,
          },
          merge: true,
        });
      }
    } catch (e) {
      Alert.alert('Error', e.response?.data?.message || 'Unable to save room');
    } finally {
      setLoading(false);
    }
  };

  const selectedType =
    roomTypes.find(x => Number(x.id) === Number(form.room_type_id))
      ?.type_name || '';

  return (
    <View style={styles.container}>
      <ScreenHeader
        title={mode === 'add' ? 'Add Room' : 'Edit Room'}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Hero Card */}

        <Card style={styles.heroCard}>
          <View style={styles.heroContent}>
            <View style={styles.heroIcon}>
              <Icon source="bed-king-outline" size={46} color="#2563EB" />
            </View>

            <Text style={styles.heroTitle}>
              {mode === 'add' ? 'Create New Room' : 'Edit Room'}
            </Text>

            <Text style={styles.heroSubtitle}>
              Manage room details, availability and housekeeping information.
            </Text>

            <Button
              mode="contained-tonal"
              icon="camera-plus"
              style={styles.uploadButton}
              onPress={() => {}}
            >
              Upload Room Photo
            </Button>
          </View>
        </Card>

        {/* Basic Information */}

        <Card style={styles.sectionCard}>
          <Card.Content>
            <Text style={styles.sectionHeading}>Basic Information</Text>

            <Menu
              visible={roomTypeVisible}
              onDismiss={() => setRoomTypeVisible(false)}
              anchor={
                <Pressable onPress={() => setRoomTypeVisible(true)}>
                  <View pointerEvents="none">
                    <TextInput
                      mode="outlined"
                      label="Room Type"
                      value={selectedType}
                      editable={false}
                      left={<TextInput.Icon icon="bed-outline" />}
                      right={<TextInput.Icon icon="chevron-down" />}
                      style={styles.input}
                      outlineStyle={styles.outlineStyle}
                    />
                  </View>
                </Pressable>
              }
              mode="elevated"
              contentStyle={{ backgroundColor: '#fff' }}
            >
              {roomTypes.map(item => (
                <Menu.Item
                  key={item.id}
                  title={item.type_name}
                  onPress={() => {
                    updateField('room_type_id', Number(item.id));
                    setRoomTypeVisible(false);
                  }}
                  containerStyle={{ width: 300 }}
                  titleStyle={{ color: '#000' }}
                />
              ))}
            </Menu>

            <TextInput
              mode="outlined"
              label="Room Number"
              value={form.room_number}
              onChangeText={text => updateField('room_number', text)}
              left={<TextInput.Icon icon="door-open" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
            />

            <TextInput
              mode="outlined"
              label="Floor Number"
              keyboardType="numeric"
              value={form.floor_no}
              onChangeText={text => updateField('floor_no', text)}
              left={<TextInput.Icon icon="office-building-outline" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
            />
          </Card.Content>
        </Card>

        {/* Room Details */}

        <Card style={styles.sectionCard}>
          <Card.Content>
            <Text style={styles.sectionHeading}>Room Details</Text>

            <Text style={styles.fieldLabel}>Room View</Text>

            <View style={styles.chipContainer}>
              {ROOM_VIEW.map(view => (
                <Pressable
                  key={view}
                  onPress={() => updateField('room_view', view)}
                  style={[
                    styles.statusChip,
                    form.room_view === view && styles.activeStatusChip,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusChipText,
                      form.room_view === view && styles.activeStatusChipText,
                    ]}
                  >
                    {view}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.fieldLabel}>Room Status</Text>

            <View style={styles.chipContainer}>
              {ROOM_STATUS.map(status => (
                <Pressable
                  key={status}
                  onPress={() => updateField('room_status', status)}
                  style={[
                    styles.statusChip,
                    form.room_status === status && styles.activeStatusChip,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusChipText,
                      form.room_status === status &&
                        styles.activeStatusChipText,
                    ]}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text style={styles.fieldLabel}>Housekeeping</Text>

            <View style={styles.chipContainer}>
              {HOUSEKEEPING.map(status => (
                <Pressable
                  key={status}
                  onPress={() => updateField('housekeeping_status', status)}
                  style={[
                    styles.statusChip,
                    form.housekeeping_status === status &&
                      styles.activeStatusChip,
                  ]}
                >
                  <Text
                    style={[
                      styles.statusChipText,
                      form.housekeeping_status === status &&
                        styles.activeStatusChipText,
                    ]}
                  >
                    {status}
                  </Text>
                </Pressable>
              ))}
            </View>
          </Card.Content>
        </Card>

        {/* Notes */}

        <Card style={styles.sectionCard}>
          <Card.Content>
            <Text style={styles.sectionHeading}>Additional Notes</Text>

            <TextInput
              mode="outlined"
              multiline
              numberOfLines={5}
              label="Notes"
              value={form.notes}
              onChangeText={text => updateField('notes', text)}
              left={<TextInput.Icon icon="note-text-outline" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
            />
          </Card.Content>
        </Card>

        {/* Save Button */}

        <Button
          mode="contained"
          icon={mode === 'add' ? 'content-save' : 'pencil'}
          loading={loading}
          disabled={loading}
          onPress={saveRoom}
          style={styles.saveButton}
          contentStyle={styles.saveButtonContent}
          labelStyle={styles.saveButtonLabel}
        >
          {mode === 'add' ? 'Save Room' : 'Update Room'}
        </Button>
      </ScrollView>
    </View>
  );
};

export default AddRoomScreen;
