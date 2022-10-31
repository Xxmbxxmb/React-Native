import React from 'react';
import { View, FlatList } from 'react-native';
import styles from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const Home = () => {
  const itemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 2, marginVertical: 8, opacity: 0.4 }} />
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
