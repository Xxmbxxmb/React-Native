import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderColor: 'white',
    borderWidth: 10,
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderColor: 'white',
    borderWidth: 10,
  },
});
