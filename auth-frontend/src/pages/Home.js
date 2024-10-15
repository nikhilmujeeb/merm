import React, { useEffect } from 'react'; // Import React and useEffect
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Home.css'; // Importing the CSS file

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Redirect to login if user is not authenticated
  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Assuming token is stored in localStorage
    if (!token) {
      navigate('/'); // Redirect to login page if no token found
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-heading">Welcome to the Home Page!</h1>
        <p className="hero-subtext">
            You have successfully logged in to the app. Enjoy your stay and Experience seamless navigation and smooth transitions with our amazing app.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
