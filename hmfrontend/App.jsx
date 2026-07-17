import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import AppNavigator from './src/navigation/AppNavigator';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
import './src/config/googleSignin';

// GoogleSignin.configure({
//   webClientId:
//     '592444654139-7b0b1naehvss26lgn56nkmq25mdon50p.apps.googleusercontent.com',
//   scopes: ['profile', 'email'],
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
// });

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
