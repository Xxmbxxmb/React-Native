import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2 = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Pagina 2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('ScreenPagina3')}
      />
    </View>
  );
};
