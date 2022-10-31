import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Animation101 } from '../components/Animation101';
import { Animation102 } from '../components/Animation102';
import { Alerts } from '../screens/Alert';
import { Home } from '../screens/Home';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputsScreen } from '../screens/TextInputs';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alerts" component={Alerts} />
      <Stack.Screen name="TextInputs" component={TextInputsScreen} />
    </Stack.Navigator>
  );
};
