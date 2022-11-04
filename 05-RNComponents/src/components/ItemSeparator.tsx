import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '../redux/hooks';

export const ItemSeparator = () => {
  const { dividerColor } = useAppSelector(state => state.theme);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        marginVertical: 8,
        opacity: 0.4,
        borderColor: dividerColor,
      }}
    />
  );
};
