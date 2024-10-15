import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Style.css'; // Reuse the CSS from the Login page

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', {
        email,
        password,
      });
      setSuccess(true); // Show success message
      setTimeout(() => navigate('/'), 3000); // Redirect to login after 3 seconds
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed. Please try again.');
      console.error('Signup error:', err); // Log the error for debugging
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error">{error}</p>}
      {success ? (
        <p className="success">
          Signup successful! Redirecting to <Link to="/">Login</Link> page...
        </p>
      ) : (
        <form onSubmit={handleSignup} className="signup-form">
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
          <button type="submit" className="signup-btn">Signup</button>
        </form>
      )}
    </div>
  );
};

// Export the component at the top level
export default Signup;
