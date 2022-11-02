import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import styles from '../theme/appTheme';

export const ModalScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />
      <Button title="Abrir modal" onPress={() => setIsOpen(true)} />

      <Modal animationType="fade" visible={isOpen} transparent={true}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              borderRadius: 5,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Modal</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20, color: 'black' }}>
              Cuerpo del Modal
            </Text>
            <Button title="Cerrar" onPress={() => setIsOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
