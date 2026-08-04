import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-paper';

import styles from './AddGuestStyles';
import GuestService from '../../../services/guestService';

import ScreenHeader from '../../../components/ScreenHeader/ScreenHeader';
import BasicInfoStep from '../../../components/GuestForm/BasicInfoStep';
import AdditionalInfoStep from '../../../components/GuestForm/AdditionalInfoStep';

const AddGuestScreen = ({ navigation }) => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',

    mobile: '',
    email: '',

    nationality: '',

    id_type: '',
    id_number: '',

    address: '',
    city: '',
    state: '',
    country: '',
    zip_code: '',

    vip_status: false,

    notes: '',
  });

  const [saving, setSaving] = useState(false);

  const handleNext = () => {
    const error = validateStepOne();

    if (error) {
      Alert.alert('Validation', error);
      return;
    }

    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const validateStepOne = () => {
    const firstName = formData.first_name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();

    if (!firstName) {
      return 'First Name is required';
    }

    if (!/^[0-9]{10,15}$/.test(mobile)) {
      return 'Mobile number must contain 10 to 15 digits';
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address';
    }

    return null;
  };

  const validateStepTwo = () => {
    if (formData.id_type && !formData.id_number.trim()) {
      return 'Please enter the ID Number';
    }

    if (formData.zip_code && !/^[0-9]{4,10}$/.test(formData.zip_code)) {
      return 'Please enter a valid ZIP Code';
    }

    return null;
  };

  const handleSave = async () => {
    const error = validateStepTwo();
    console.log(formData);

    if (error) {
      Alert.alert('Validation', error);
      return;
    }

    try {
      setSaving(true);

      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        gender: formData.gender,
        dob: formData.dob,

        mobile: formData.mobile,
        email: formData.email,

        nationality: formData.nationality,

        id_type: formData.id_type,
        id_number: formData.id_number,

        address: formData.address,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        zip_code: formData.zip_code,

        vip_status: formData.vip_status,

        notes: formData.notes,
      };

      const response = await GuestService.create(payload);

      if (response.success) {
        Alert.alert('Success', response.message);

        navigation.goBack();
      }
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        error?.response?.data?.message || 'Unable to create guest',
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="Add Guest" onBackPress={() => navigation.goBack()} />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {step === 1 ? (
              <BasicInfoStep formData={formData} setFormData={setFormData} />
            ) : (
              <AdditionalInfoStep
                formData={formData}
                setFormData={setFormData}
              />
            )}
          </ScrollView>
        </TouchableWithoutFeedback>

        <View style={styles.footer}>
          {step === 2 && (
            <Button
              mode="outlined"
              style={styles.backButton}
              onPress={handleBack}
            >
              Back
            </Button>
          )}

          <Button
            mode="contained"
            loading={saving}
            disabled={saving}
            style={styles.nextButton}
            onPress={step === 1 ? handleNext : handleSave}
          >
            {step === 1 ? 'Next' : 'Save Guest'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddGuestScreen;
