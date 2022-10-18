import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Pagina 1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('ScreenPagina2')}
      />
    </View>
  );
};
