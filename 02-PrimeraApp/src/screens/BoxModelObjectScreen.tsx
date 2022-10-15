import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const BoxModelObjectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
  },
});
