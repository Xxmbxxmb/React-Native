import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Animation101 } from '../components/Animation101';
import { Animation102 } from '../components/Animation102';
import { Alerts } from '../screens/Alert';
import { Home } from '../screens/Home';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputsScreen } from '../screens/TextInputs';
import { PullToRefresh } from '../screens/PullToRefresh';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScroll } from '../screens/InfiniteScroll';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alerts" component={Alerts} />
      <Stack.Screen name="TextInputs" component={TextInputsScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScroll} />
    </Stack.Navigator>
  );
};
