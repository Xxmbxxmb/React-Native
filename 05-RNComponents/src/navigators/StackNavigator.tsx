import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Animation101 } from '../components/Animation101';
import { Animation102 } from '../components/Animation102';
import { Alerts } from '../screens/Alert';
import { Home } from '../screens/Home';
import { SwitchScreen } from '../screens/SwitchScreen';
import { TextInputsScreen } from '../screens/TextInputs';
import { PullToRefresh } from '../screens/PullToRefresh';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScroll } from '../screens/InfiniteScroll';
import { SlideScreen } from '../screens/SlideScreen';
import { ChangeTheme } from '../screens/ChangeTheme';
import { NavigationContainer } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { View } from 'react-native';
import { useColorScheme } from 'react-native';
import { setDarkTheme, setLightTheme } from '../redux/slices/theme';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useAppSelector(state => state.theme);
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    colorScheme === 'light'
      ? dispatch(setLightTheme())
      : dispatch(setDarkTheme());
  }, [colorScheme, dispatch]);
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyle: { backgroundColor: 'white' },
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Animation101" component={Animation101} />
          <Stack.Screen name="Animation102" component={Animation102} />
          <Stack.Screen name="Switch" component={SwitchScreen} />
          <Stack.Screen name="Alerts" component={Alerts} />
          <Stack.Screen name="TextInputs" component={TextInputsScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
          <Stack.Screen
            name="SectionListScreen"
            component={SectionListScreen}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScroll}
          />
          <Stack.Screen name="SlidesScreen" component={SlideScreen} />
          <Stack.Screen name="ThemeScreen" component={ChangeTheme} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
