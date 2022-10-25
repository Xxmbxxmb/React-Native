import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './BottomTab';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        // drawerPosition: 'right', // Cambia el menu de lugar
        // headerShown: false, // Oculta la hamburguesa
        drawerIcon: () => <Icon name="logo-stackoverflow" />,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
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
          style={{
            ...styles.menuBtn,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="navigate-outline" size={20} />
          <Text style={styles.textoMenu}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.menuBtn, flexDirection: 'row' }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="settings-outline" size={20} />
          <Text style={styles.textoMenu}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
