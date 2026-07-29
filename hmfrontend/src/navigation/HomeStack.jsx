import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/Dashboard/DashboardScreen';

// Room Types
import RoomTypeListScreen from '../screens/Rooms/RoomTypes/RoomTypeListScreen';
import RoomListScreen from '../screens/Rooms/RoomListScreen/RoomListScreen';
import AddRoomScreen from '../screens/Rooms/AddRoomScreen/AddRoomScreen';

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
    </Stack.Navigator>
  );
};

export default HomeStack;
