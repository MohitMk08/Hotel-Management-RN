import React, { useState, useEffect } from 'react';
import { Modal, ScrollView, View } from 'react-native';

import { Button, Text, TextInput } from 'react-native-paper';

import styles from './RoomTypeFormStyles';
import COLORS from '../../constants/colors';

const RoomTypeForm = ({
  visible,
  onClose,
  onSubmit,
  initialData,
  loading = false,
}) => {
  const data = initialData || {};

  const [typeName, setTypeName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = initialData || {};

    setTypeName(data.type_name || '');

    setCapacity(data.max_capacity ? String(data.max_capacity) : '');

    setPrice(data.base_price ? String(data.base_price) : '');

    setDescription(data.description || '');

    setErrors({});
  }, [initialData, visible]);

  const handleSubmit = () => {
    const validationErrors = {};

    if (!typeName.trim()) {
      validationErrors.typeName = 'Room Type is required';
    }

    if (!capacity.trim()) {
      validationErrors.capacity = 'Capacity is required';
    } else if (Number(capacity) <= 0) {
      validationErrors.capacity = 'Capacity must be greater than 0';
    }

    if (!price.trim()) {
      validationErrors.price = 'Price is required';
    } else if (Number(price) <= 0) {
      validationErrors.price = 'Price must be greater than 0';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit({
      type_name: typeName.trim(),
      max_capacity: Number(capacity),
      base_price: Number(price),
      description: description.trim(),
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.dragHandle} />

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
          >
            <Text style={styles.title}>
              {data.id ? 'Edit Room Type' : 'Create Room Type'}
            </Text>

            <Text style={styles.subtitle}>
              Configure room category, pricing and occupancy details.
            </Text>

            {/* Room Type */}

            <Text style={styles.sectionHeading}>Basic Information</Text>

            <Text style={styles.sectionTitle}>Room Type Name</Text>

            <TextInput
              mode="outlined"
              label="Room Type"
              value={typeName}
              onChangeText={setTypeName}
              left={<TextInput.Icon icon="bed-outline" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
              activeOutlineColor={COLORS.primary}
              outlineColor="#D1D5DB"
            />

            {errors.typeName ? (
              <Text style={styles.errorText}>{errors.typeName}</Text>
            ) : null}

            {/* Capacity */}

            <Text style={styles.sectionHeading}>Occupancy & Pricing</Text>

            <Text style={styles.sectionTitle}>Maximum Capacity</Text>

            <TextInput
              mode="outlined"
              label="Guests"
              value={capacity}
              keyboardType="numeric"
              onChangeText={setCapacity}
              left={<TextInput.Icon icon="account-group-outline" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
              activeOutlineColor={COLORS.primary}
              outlineColor="#D1D5DB"
            />

            {errors.capacity ? (
              <Text style={styles.errorText}>{errors.capacity}</Text>
            ) : null}

            {/* Price */}

            <Text style={styles.sectionTitle}>Base Price</Text>

            <TextInput
              mode="outlined"
              label="Base Price"
              value={price}
              keyboardType="numeric"
              onChangeText={setPrice}
              left={<TextInput.Icon icon="currency-inr" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
              activeOutlineColor={COLORS.primary}
              outlineColor="#D1D5DB"
            />

            {errors.price ? (
              <Text style={styles.errorText}>{errors.price}</Text>
            ) : null}

            {/* Description */}

            <Text style={styles.sectionHeading}>Additional Information</Text>

            <Text style={styles.sectionTitle}>Description</Text>

            <TextInput
              mode="outlined"
              label="Description"
              value={description}
              multiline
              numberOfLines={4}
              onChangeText={setDescription}
              left={<TextInput.Icon icon="text-box-outline" />}
              style={styles.input}
              outlineStyle={styles.outlineStyle}
              activeOutlineColor={COLORS.primary}
              outlineColor="#D1D5DB"
            />

            {/* Buttons */}

            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                onPress={onClose}
                style={styles.cancelButton}
                labelStyle={styles.cancelButtonLabel}
              >
                Cancel
              </Button>

              <Button
                mode="contained"
                icon="content-save"
                loading={loading}
                disabled={loading}
                onPress={handleSubmit}
                style={styles.saveButton}
                contentStyle={{
                  height: 56,
                }}
                labelStyle={styles.saveButtonLabel}
              >
                {data.id ? 'Update Room Type' : 'Create Room Type'}
              </Button>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default RoomTypeForm;
