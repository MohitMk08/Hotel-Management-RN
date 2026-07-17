import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthAPI from '../../../api/authApi';

import {
  TextInput,
  Checkbox,
  HelperText,
  ActivityIndicator,
} from 'react-native-paper';

import StorageService from '../../../services/storageService';
import GoogleAuthService from '../../../services/googleAuthService';

import { Alert } from 'react-native';
import styles from './LoginStyles';
import LinearGradient from 'react-native-linear-gradient';
import { textInputTheme } from '../../../constants/paperTheme';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [rememberMe, setRememberMe] = useState(false);

  const [secureText, setSecureText] = useState(true);

  const [loginLoading, setLoginLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigation = useNavigation();

  const validate = () => {
    let valid = true;

    setEmailError('');
    setPasswordError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email');
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Minimum 8 characters');
      valid = false;
    }

    return valid;
  };

  // Login Function
  const handleLogin = async () => {
    if (!validate()) {
      return;
    }

    try {
      setLoginLoading(true);

      const payload = {
        email,
        password,
      };

      const response = await AuthAPI.login(payload);

      if (response.success) {
        await StorageService.saveUserSession(
          response.data.token,
          response.data.user,
        );

        setLoginLoading(false);
        Alert.alert('Success', 'Login successful!', [
          {
            text: 'OK',
            onPress: () => navigation.replace('Dashboard'),
          },
        ]);
        setEmail('');
        setPassword('');
      } else {
        setLoginLoading(false);

        Alert.alert('Login Failed', response.message);
      }
    } catch (error) {
      setLoginLoading(false);

      Alert.alert(
        'Login Failed',
        error.response?.data?.message || 'Unable to login.',
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
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'} // Changed to light-content for white text
        translucent={true}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Header Image Section */}

        <View style={styles.headerContainer}>
          <Image
            source={require('../../../assets/images/hotel-bg.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />

          <LinearGradient
            colors={[
              'rgba(0,0,0,0.15)',
              'rgba(0,0,0,0.45)',
              'rgba(0,0,0,0.75)',
            ]}
            style={styles.overlay}
          />
        </View>

        {/* <Card style={styles.featureCard}>
          <View style={styles.featureContainer}>
            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon
                  source="shield-check-outline"
                  size={28}
                  color={COLORS.primary}
                />
              </View>

              <Text style={styles.featureTitle}>Secure Access</Text>

              <Text style={styles.featureSubTitle}>Safe & Protected</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon source="chart-line" size={28} color={COLORS.primary} />
              </View>

              <Text style={styles.featureTitle}>Real-time Updates</Text>

              <Text style={styles.featureSubTitle}>Live Booking Status</Text>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.iconCircle}>
                <Icon
                  source="clock-time-four-outline"
                  size={28}
                  color={COLORS.primary}
                />
              </View>

              <Text style={styles.featureTitle}>24/7 Management</Text>

              <Text style={styles.featureSubTitle}>Anytime Anywhere</Text>
            </View>
          </View>
        </Card> */}

        {/* login */}

        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/logo/hotel-logo.png')}
              style={styles.logo}
            />

            <Text style={styles.title}>Welcome Back</Text>

            <Text style={styles.subtitle}>
              Sign in to continue managing your hotel
            </Text>
          </View>

          <TextInput
            label="Email Address"
            mode="outlined"
            value={email}
            onChangeText={setEmail}
            left={<TextInput.Icon icon="email-outline" />}
            style={styles.input}
            outlineStyle={styles.outlineStyle}
            textColor="#000"
            autoCapitalize="none"
            keyboardType="email-address"
            theme={textInputTheme}
          />

          {emailError && (
            <HelperText type="error" visible={!!emailError}>
              {emailError}
            </HelperText>
          )}

          <TextInput
            label="Password"
            mode="outlined"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
            style={styles.input}
            outlineStyle={styles.outlineStyle}
            textColor="#000"
            left={<TextInput.Icon icon="lock-outline" />}
            right={
              <TextInput.Icon
                icon={secureText ? 'eye-off-outline' : 'eye-outline'}
                onPress={() => setSecureText(!secureText)}
              />
            }
            theme={textInputTheme}
          />

          {passwordError && (
            <HelperText type="error" visible={!!passwordError}>
              {passwordError}
            </HelperText>
          )}

          <View style={styles.bottomRow}>
            <View style={styles.rememberRow}>
              <Checkbox
                status={rememberMe ? 'checked' : 'unchecked'}
                onPress={() => setRememberMe(!rememberMe)}
              />

              <Text style={styles.rememberText}>Remember Me</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={handleLogin}
            disabled={loginLoading || googleLoading}
          >
            <LinearGradient
              colors={['#3d76f0', '#1D4ED8']}
              style={styles.loginButton}
            >
              {loginLoading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.loginButtonText}>LOGIN</Text>
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
            disabled={loginLoading || googleLoading}
          >
            {googleLoading ? (
              <ActivityIndicator color="#4285F4" />
            ) : (
              <>
                <Image
                  source={require('../../../assets/icons/google.png')}
                  style={styles.googleIcon}
                />

                <Text style={styles.googleText}>Sign in with Google</Text>
              </>
            )}
          </TouchableOpacity>

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don't have an account?</Text>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
