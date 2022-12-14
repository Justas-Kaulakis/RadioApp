import React, {FC} from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
};
export type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Main'
>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: FC = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{title: '🎵Start Listening!🎵'}}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
