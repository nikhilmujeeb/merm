// frontend/src/reducers/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false, // Set your initial state
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true; // Example login action
    },
    logout(state) {
      state.isAuthenticated = false; // Example logout action
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
