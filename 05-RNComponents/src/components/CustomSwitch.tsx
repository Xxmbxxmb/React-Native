import React, { useState } from 'react';
import { Switch, Platform } from 'react-native';
import { useAppSelector } from '../redux/hooks';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const {
    theme: { colors },
  } = useAppSelector(state => state.theme);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: colors.primary }}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
