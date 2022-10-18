import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2 = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras', // Cambiar lo que sale arriba a la izq flecha volver IOS
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('ScreenPagina3')}
      />
    </View>
  );
};
