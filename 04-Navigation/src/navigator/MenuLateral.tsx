import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        // drawerPosition: 'right', // Cambia el menu de lugar
        headerShown: false, // Oculta la hamburguesa
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
          }}
        />
      </View>

      {/* Menu options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.textoMenu}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.textoMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
