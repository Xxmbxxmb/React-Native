import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useAppSelector } from '../redux/hooks';

export const Animation101 = () => {
  const { opacity, fadeIn, fadeOut, position, startMoving } = useAnimation();
  const { colors } = useAppSelector(state => state.theme.theme);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{ translateY: position }],
          backgroundColor: colors.primary,
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
          color={colors.primary}
        />
        <Button title="FadeOut" onPress={fadeOut} color={colors.primary} />
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
