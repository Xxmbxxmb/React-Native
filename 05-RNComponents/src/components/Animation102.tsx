import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useAppSelector } from '../redux/hooks';

export const Animation102 = () => {
  const { colors } = useAppSelector(state => state.theme.theme);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          ...pan.getLayout(),
          ...styles.purpleBox,
          backgroundColor: colors.primary,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#78CEDB',
    width: 150,
    height: 150,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
