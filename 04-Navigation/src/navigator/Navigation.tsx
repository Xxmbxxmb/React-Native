import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenPagina1" component={Pagina1} />
      <Stack.Screen name="ScreenPagina2" component={Pagina2} />
      <Stack.Screen name="ScreenPagina3" component={Pagina3} />
    </Stack.Navigator>
  );
};
