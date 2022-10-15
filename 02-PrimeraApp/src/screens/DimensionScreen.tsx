import React from 'react';
import {Dimensions, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionScreen = () => {

    const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{
            ...styles.cajaMorada,
            width: width * 0.2,
        }} />
        <Text>
          W: {width}, H: {height}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cajaMorada: {
    backgroundColor: '#5856D6',
    // width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 30,
  },
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
});
