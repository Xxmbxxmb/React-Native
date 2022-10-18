import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Pagina 3</Text>

      <Button title="Ir atras" onPress={() => navigation.pop()} />

      <Button title="Ir al inicio" onPress={() => navigation.popToTop()} />
    </View>
  );
};
