import React, { useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import styles from '../theme/appTheme';

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('Termino');
      setRefreshing(false);
      setData('Hola Mundo');
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} // funciona para IOS y android
        //   progressBackgroundColor="#5856D6"
          colors={['white', 'red', 'orange']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
