import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTab';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const TabAndroidBottom = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <TabAndroidBottom.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colores.primary }}
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: 'green',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: props => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'analytics-outline';
              break;

            case 'Tab2Screen':
              iconName = 'compass-outline';
              break;

            case 'StackNavigator':
              iconName = 'logo-stackoverflow';
              break;
          }
          return <Icon name={`${iconName}`} size={20} />;
        },
      })}>
      <TabAndroidBottom.Screen
        name="Tab1Screen"
        options={{
          title: 'Test1',
        }}
        component={Tab1Screen}
      />

      <TabAndroidBottom.Screen name="Tab2Screen" component={TopTabNavigator} />
      <TabAndroidBottom.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </TabAndroidBottom.Navigator>
  );
}

const TabIOSBottom = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <TabIOSBottom.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: 'green',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: props => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;

            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'StackNavigator':
              iconName = 'Stack';
              break;
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}>
      {/* <Tab.Screen
          name="Tab1Screen"
          options={{
            title: 'Test1',
            tabBarIcon: props => <Text style={{ color: props.color }}>Tab1</Text>,
          }}
          component={Tab1Screen}
        /> */}
      <TabIOSBottom.Screen
        name="Tab1Screen"
        options={{
          title: 'Test1',
        }}
        component={Tab1Screen}
      />
      <TabIOSBottom.Screen name="Tab2Screen" component={TopTabNavigator} />
      <TabIOSBottom.Screen name="StackNavigator" component={StackNavigator} />
    </TabIOSBottom.Navigator>
  );
};
