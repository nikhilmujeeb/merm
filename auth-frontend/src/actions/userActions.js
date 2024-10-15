// src/actions/userActions.js
import axios from 'axios';

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        console.log('Login response:', response.data); // Log the response
        const token = response.data.token;

        // Dispatch a success action with user data (token or user details)
        dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });

        // Return token for further handling if needed
        return token; // Returning token to handle redirection in the component
    } catch (error) {
        console.error('Login error:', error);
        // Dispatch an error action if login fails
        dispatch({ type: 'LOGIN_FAILURE', payload: { error: error.response?.data?.error || 'Login failed' } });
        throw error; // Rethrow to catch in the component
    }
};
