import React, { useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(false);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn(400);
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          size={30}
          color="#5856D6"
          style={{ position: 'absolute' }}
        />
      )}
      <Animated.Image
        source={{ uri }}
        onLoadEnd={finishLoading}
        style={{ ...(style as any), opacity }}
      />
    </View>
  );
};
