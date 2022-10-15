import React from 'react';
import {SafeAreaView} from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {DimensionScreen} from './src/screens/DimensionScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B',
    }}>
      {/* <HolaMundoScreen />
      <ContadorScreen />
      <DimensionScreen /> */}
      {/* <PositionScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
