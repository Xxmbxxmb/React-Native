import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina 2</Text>

      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
