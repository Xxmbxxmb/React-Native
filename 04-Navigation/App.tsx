import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigator/MenuLateral';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
// import { Tabs } from './src/navigator/BottomTab';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
