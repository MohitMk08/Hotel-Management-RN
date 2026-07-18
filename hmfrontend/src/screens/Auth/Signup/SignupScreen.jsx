import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  TextInput,
  Checkbox,
  HelperText,
  ActivityIndicator,
  Icon,
} from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import AuthAPI from '../../../api/authApi';

import styles from './SignupStyles';
import { textInputTheme } from '../../../constants/paperTheme';
import GoogleAuthService from '../../../services/googleAuthService';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [signupLoading, setSignupLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    terms: '',
  });

  const validate = () => {
    let isValid = true;

    let newErrors = {
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      terms: '',
    };

    if (fullName.trim().length < 3) {
      newErrors.fullName = 'Enter your full name';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Enter valid email';
      isValid = false;
    }

    if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = 'Enter valid mobile number';
      isValid = false;
    }

    if (password.length < 8) {
      newErrors.password = 'Minimum 8 characters';
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!acceptTerms) {
      newErrors.terms = 'Accept Terms & Conditions';
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSignup = async () => {
    if (!validate()) {
      return;
    }

    try {
      signupLoading(true);

      const payload = {
        full_name: fullName,
        email,
        mobile,
        password,
        confirm_password: confirmPassword,
      };

      const response = await AuthAPI.register(payload);

      signupLoading(false);

      setFullName('');
      setEmail('');
      setMobile('');
      setPassword('');
      setConfirmPassword('');

      Alert.alert(
        'Registration Successful',
        'Your account has been created successfully.',

        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ],
      );
    } catch (error) {
      signupLoading(false);

      Alert.alert(
        'Registration Failed',
        error.response?.data?.message || 'Something went wrong.',
      );
    }
  };

  // google signin function
  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      await GoogleAuthService.signIn(navigation);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.headerContainer}>
          <Image
            source={require('../../../assets/images/hotel-bg.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={[
              'rgba(0,0,0,0.20)',
              'rgba(0,0,0,0.45)',
              'rgba(0,0,0,0.75)',
            ]}
            style={styles.overlay}
          />
        </View>

        <View style={styles.signupContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/logo/hotel-logo.png')}
              style={styles.logo}
            />

            <Text style={styles.title}>Create Your Account</Text>

            <Text style={styles.subtitle}>
              Start managing your hotel in minutes
            </Text>
          </View>

          <TextInput
            label="Full Name"
            mode="outlined"
            value={fullName}
            onChangeText={setFullName}
            left={<TextInput.Icon icon="account-outline" />}
            style={styles.input}
            textColor="#000"
            outlineStyle={styles.outlineStyle}
            theme={textInputTheme}
          />

          {errors.fullName && (
            <HelperText type="error" visible={!!errors.fullName}>
              {errors.fullName}
            </HelperText>
          )}

          <TextInput
            label="Email Address"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            left={<TextInput.Icon icon="email-outline" />}
            style={styles.input}
            textColor="#000"
            outlineStyle={styles.outlineStyle}
            theme={textInputTheme}
          />

          {errors.email && (
            <HelperText type="error" visible={!!errors.email}>
              {errors.email}
            </HelperText>
          )}

          <TextInput
            label="Mobile Number"
            mode="outlined"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="number-pad"
            maxLength={10}
            left={<TextInput.Icon icon="phone-outline" />}
            style={styles.input}
            textColor="#000"
            outlineStyle={styles.outlineStyle}
            theme={textInputTheme}
          />

          {errors.mobile && (
            <HelperText type="error" visible={!!errors.mobile}>
              {errors.mobile}
            </HelperText>
          )}

          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={securePassword}
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon
                icon={securePassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setSecurePassword(!securePassword)}
              />
            }
            style={styles.input}
            outlineStyle={styles.outlineStyle}
            theme={textInputTheme}
            textColor="#000"
          />

          {errors.password && (
            <HelperText type="error" visible={!!errors.password}>
              {errors.password}
            </HelperText>
          )}

          <TextInput
            label="Confirm Password"
            mode="outlined"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secureConfirmPassword}
            left={<TextInput.Icon icon="lock-check-outline" />}
            right={
              <TextInput.Icon
                icon={secureConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}
              />
            }
            style={styles.input}
            outlineStyle={styles.outlineStyle}
            theme={textInputTheme}
            textColor="#000"
          />

          {errors.confirmPassword && (
            <HelperText type="error" visible={!!errors.confirmPassword}>
              {errors.confirmPassword}
            </HelperText>
          )}

          <View style={styles.termsRow}>
            <Checkbox
              status={acceptTerms ? 'checked' : 'unchecked'}
              onPress={() => setAcceptTerms(!acceptTerms)}
            />

            <Text style={styles.termsText}>I agree to Terms & Conditions</Text>
          </View>

          {errors.terms && (
            <HelperText type="error" visible={!!errors.terms}>
              {errors.terms}
            </HelperText>
          )}

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={handleSignup}
            disabled={signupLoading}
          >
            <LinearGradient
              colors={['#2563EB', '#1D4ED8']}
              style={styles.signupButton}
            >
              {signupLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.signupButtonText}>CREATE ACCOUNT</Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.divider} />

            <Text style={styles.orText}>OR</Text>

            <View style={styles.divider} />
          </View>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            disabled={signupLoading || googleLoading}
          >
            <Image
              source={require('../../../assets/icons/google.png')}
              style={styles.googleIcon}
            />

            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
