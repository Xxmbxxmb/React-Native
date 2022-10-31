import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101 = () => {
  const { opacity, fadeIn, fadeOut, position, startMoving } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{ translateY: position }],
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: 150,
          justifyContent: 'space-between',
        }}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn();
            startMoving(100);
          }}
        />
        <Button title="FadeOut" onPress={fadeOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
