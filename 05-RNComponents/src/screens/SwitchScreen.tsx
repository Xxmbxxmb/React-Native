import React, { useState } from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useAppSelector } from '../redux/hooks';

export const SwitchScreen = () => {
  const [stateLocal, setStateLocal] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const { colors } = useAppSelector(state => state.theme.theme);

  const onChange = (value: boolean, field: keyof typeof stateLocal) => {
    setStateLocal({
      ...stateLocal,
      [field]: value,
    });
  };
  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isActive
        </Text>
        <CustomSwitch
          isOn={true}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={false}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={true}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{ ...styles.switchText, color: colors.text }}>
        {JSON.stringify(stateLocal, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
});
