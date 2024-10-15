// frontend/src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; // Make sure this path is correct

const store = configureStore({
  reducer: {
    auth: authReducer, // Ensure this reducer is defined
  },
});

export default store;
