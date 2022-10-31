import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
  loading: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers: builder => {},
});

export default authSlice.reducer;
export const { setUsername } = authSlice.actions;
