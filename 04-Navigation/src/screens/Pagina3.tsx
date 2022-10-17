import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 3</Text>

      <Button title="Ir Atras" onPress={() => navigation.pop()} />
      <Button title="Ir Inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
