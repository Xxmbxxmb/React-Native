import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { useAppSelector } from '../redux/hooks';
import styles from '../theme/appTheme';

export const TextInputsScreen = () => {
  const { form, onChange, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: { colors },
    dividerColor,
  } = useAppSelector(state => state.theme);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="Text Inputs" />
            <TextInput
              style={{
                ...stylesState.input,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder={'Ingrese su Nombre'}
              placeholderTextColor={dividerColor}
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              keyboardAppearance={'dark'} //IOS solamente
            />
            <TextInput
              style={{
                ...stylesState.input,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder={'Ingrese su Email'}
              placeholderTextColor={dividerColor}
              value={form.email}
              autoCorrect={false}
              onChangeText={value => onChange(value, 'email')}
              keyboardType={'email-address'}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>Suscribirse</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />

            <TextInput
              style={{
                ...stylesState.input,
                borderColor: colors.text,
                color: colors.text,
              }}
              placeholder={'Ingrese su Telefono'}
              placeholderTextColor={dividerColor}
              value={form.phone}
              autoCorrect={false}
              onChangeText={value => onChange(value, 'phone')}
              keyboardType={'phone-pad'}
            />
            <View style={{ height: 50 }} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesState = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    color: 'black',
  },
});
