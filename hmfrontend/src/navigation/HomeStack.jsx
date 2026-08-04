import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';

// Room Types
import RoomTypeListScreen from '../screens/Rooms/RoomTypes/RoomTypeListScreen';
import RoomListScreen from '../screens/Rooms/RoomListScreen/RoomListScreen';
import AddRoomScreen from '../screens/Rooms/AddRoomScreen/AddRoomScreen';
import GuestListScreen from '../screens/Guests/GuestList/GuestListScreen';
import AddGuestScreen from '../screens/Guests/AddGuest/AddGuestScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />

      <Stack.Screen name="RoomTypeList" component={RoomTypeListScreen} />
      <Stack.Screen
        name="RoomList"
        component={RoomListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} />
      <Stack.Screen name="GuestList" component={GuestListScreen} />
      <Stack.Screen name="AddGuest" component={AddGuestScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
