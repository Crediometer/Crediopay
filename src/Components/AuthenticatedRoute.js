// src/components/AuthenticatedRoute.js

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ element, isAuthenticated,path}) => {
      const isTokenValid = isAuthenticated;

      return isTokenValid ? <Outlet /> : <Navigate to="/" />;
};

// Replace this function with your actual token validation logic
const checkTokenValidity = () => {
  // Example: Check if the token exists and is not expired
  const token = localStorage.getItem('auth');
  return !!token; // Return true if the token is not empty
};

const mapStateToProps = state => ({
  isAuthenticated: state.login.token.data.token.token,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
