import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import styles from '../theme/appTheme';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setDarkTheme, setLightTheme } from '../redux/slices/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChangeTheme = () => {
  const dispatch = useAppDispatch();
  const { currentTheme, theme } = useAppSelector(state => state.theme);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            currentTheme === 'dark'
              ? dispatch(setLightTheme())
              : dispatch(setDarkTheme());
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 100,
            height: 50,
            borderRadius: 20,
            marginTop: 20,
          }}>
          {currentTheme === 'dark' ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="sunny-outline" size={35} color={theme.colors.background} />
            </View>
          ) : (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="moon-outline" size={35} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
