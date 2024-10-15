// src/reducers/index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Make sure this path is correct

const rootReducer = combineReducers({
  auth: authReducer,
  // add other reducers here
});

export default rootReducer;
