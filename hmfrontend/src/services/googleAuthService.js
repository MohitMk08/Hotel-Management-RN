import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import AuthAPI from '../api/authApi';

const GoogleAuthService = {
  signIn: async () => {
    try {
      await GoogleSignin.signOut();

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      await GoogleSignin.signIn();

      const tokens = await GoogleSignin.getTokens();

      const googleCredential = auth.GoogleAuthProvider.credential(
        tokens.idToken,
        tokens.accessToken,
      );

      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      const firebaseToken = await userCredential.user.getIdToken();

      const response = await AuthAPI.googleLogin({
        firebaseToken,
      });

      console.log('Backend Response:', response);

      if (response.success) {
        return response.data;
      }

      throw new Error(response.message);
    } catch (error) {
      console.log('Google Sign In Error:', error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled sign in');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in already in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services unavailable');
      }
    }
  },
};

export default GoogleAuthService;
