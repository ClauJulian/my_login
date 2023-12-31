import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

export const PublicRoutes = ({children}) => {

  const { state } = useAuth();

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PublicRoutes