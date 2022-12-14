import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../redux/hooks';
import styles from '../theme/appTheme';

interface Props {
  title: string;
}

export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();
  const {
    theme: { colors },
  } = useAppSelector(state => state.theme);
  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
    </View>
  );
};
