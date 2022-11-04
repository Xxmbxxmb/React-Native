import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StackNavigator } from './src/navigators/StackNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {

  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
