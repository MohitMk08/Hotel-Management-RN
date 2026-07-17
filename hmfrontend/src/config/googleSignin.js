import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '592444654139-7b0b1naehvss26lgn56nkmq25mdon50p.apps.googleusercontent.com',
  //   scopes: ['profile', 'email'],
  //   offlineAccess: true,
  //   forceCodeForRefreshToken: true,
});

export default GoogleSignin;
