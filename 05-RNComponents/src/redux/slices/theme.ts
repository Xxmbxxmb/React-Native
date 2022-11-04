import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '@react-navigation/native';

export interface ThemeState {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  theme: Theme;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0, 0, 0, 0.7)',
  theme: {
    dark: false,
    colors: {
      primary: '#084F6A',
      background: 'white',
      card: 'white',
      text: 'black',
      border: 'black',
      notification: 'teal',
    },
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dividerColor: 'rgba(255, 255, 255, 0.7)',
  theme: {
    dark: true,
    colors: {
      primary: '#5856D6',
      background: 'black',
      card: 'black',
      text: 'white',
      border: 'black',
      notification: 'teal',
    },
  },
};

export const initialState: ThemeState = {
  currentTheme: 'light',
  dividerColor: 'rgba(0, 0, 0, 0.7)',
  theme: {
    dark: false,
    colors: {
      primary: '#084F6A',
      background: 'white',
      card: 'white',
      text: 'black',
      border: 'black',
      notification: 'teal',
    },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkTheme: (state: ThemeState): ThemeState => {
      state.currentTheme = 'dark';
      state.dividerColor = darkTheme.dividerColor;
      state.theme = darkTheme.theme;
      return state;
    },
    setLightTheme: (state: ThemeState): ThemeState => {
      state.currentTheme = 'light';
      state.dividerColor = lightTheme.dividerColor;
      state.theme = lightTheme.theme;
      return state;
    },
  },
});

export default themeSlice.reducer;
export const { setDarkTheme, setLightTheme } = themeSlice.actions;
