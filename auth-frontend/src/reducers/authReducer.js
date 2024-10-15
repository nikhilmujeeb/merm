// src/reducers/authReducer.js
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user, // Adjust if you store user info
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload.error,
        };
      default:
        return state;
    }
  };
  