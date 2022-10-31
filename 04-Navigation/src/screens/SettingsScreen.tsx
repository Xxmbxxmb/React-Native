import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUsername } from '../redux/slices/auth';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(state => state.auth);
  const [text, onChangeText] = useState('');

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>
      <TextInput onChangeText={onChangeText} value={text} />
      <Button
        title="Cambiar usuario"
        onPress={() => dispatch(setUsername(text))}
      />
    </View>
  );
};
