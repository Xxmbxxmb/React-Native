import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { initialState } from '../redux/slices/theme';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation();
  const { colors } = useAppSelector(state => state.theme.theme);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <View style={styles.container}>
          <Icon name={menuItem.icon} size={23} color={colors.primary} />
          <Text style={{ ...styles.itemText, color: colors.text }}>
            {menuItem.name}
          </Text>
        </View>
        <Icon
          name={'chevron-forward-outline'}
          size={23}
          color={colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
