import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1 = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('ScreenPagina2')}
      />

      <Text style={{ marginVertical: 20, fontSize: 15, marginLeft: 5 }}>
        Navegar con argumentos
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Trini',
            })
          }>
          <Text style={styles.botonGrandeTexto}>Trini</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
