import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pagina1Screen" component={Pagina1} />
      <Stack.Screen name="Pagina2Screen" component={Pagina2} />
      <Stack.Screen name="Pagina3Screen" component={Pagina3} />
    </Stack.Navigator>
  );
};
