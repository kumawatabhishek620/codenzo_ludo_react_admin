import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthToken, getUserData } from '../apis/Api';

export default function PrivateRoute({ children }) {
  const authToken = getAuthToken();
  const userData = getUserData();

  if (!authToken || !userData) {
    return <Navigate to="/login" />;
  }

  return children;
}
