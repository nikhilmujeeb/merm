// src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import { loginUser } from '../actions/userActions'; // Adjust the path as necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
      e.preventDefault();

      try {
          await dispatch(loginUser(email, password)); // Dispatch login action
          navigate('/home'); // Redirect to home page
      } catch (error) {
          console.error('Login failed:', error);
          setError(error.message || 'Login failed. Please check your credentials.');
      }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {/* Display error message */}
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p className="signup-link">
        Don’t have an account? <Link to="/signup">Signup here</Link>
      </p>
    </div>
  );
};

export default Login;
