// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Only keep the necessary import
import { useSelector } from 'react-redux'; // Import useSelector to access state

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Adjust according to your reducer

  return isAuthenticated ? children : <Navigate to="/" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;
