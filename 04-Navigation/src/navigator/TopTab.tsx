import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: { elevation: 0, shadowColor: 'transparent' },
        tabBarIcon: props => {
          let icono: string = '';

          switch (route.name) {
            case 'Chat':
              icono = 'chatbox-ellipses-outline';
              break;
            case 'Contact':
              icono = 'person-circle-outline';
              break;
            case 'Album':
              icono = 'albums-outline';
              break;
          }
          return <Icon name={`${icono}`} size={20} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Album" component={AlbumScreen} />
    </Tab.Navigator>
  );
};
