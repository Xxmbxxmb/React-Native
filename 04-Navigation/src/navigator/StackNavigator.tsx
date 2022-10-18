import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1 } from '../screens/Pagina1';
import { Pagina2 } from '../screens/Pagina2';
import { Pagina3 } from '../screens/Pagina3';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams = {
  ScreenPagina1: undefined;
  ScreenPagina2: undefined;
  ScreenPagina3: undefined;
  PersonaScreen: { id: number; nombre: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName="ScreenPagina2" // elegir en que pagina se inicia la APP
      screenOptions={{
        // headerShown: false, // esconde el header
        headerStyle: {
          elevation: 0, // quita la sombra del header en android
          shadowColor: 'transparent', //quita la sombra del header en ios
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="ScreenPagina1"
        component={Pagina1}
        options={{ title: 'Pagina 1' }}
      />
      <Stack.Screen
        name="ScreenPagina2"
        component={Pagina2}
        options={{ title: 'Screen 2' }}
      />
      <Stack.Screen
        name="ScreenPagina3"
        component={Pagina3}
        options={{ title: 'Pag 3' }}
      />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
