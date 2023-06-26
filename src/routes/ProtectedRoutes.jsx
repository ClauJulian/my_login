import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

export const ProtectedRoutes = ({children}) => {

  // const { isLoggedIn } = useAuth();

  const isLoggedIn = true;
  if (isLoggedIn) return children;
 
  return <Navigate to="/login" />
}

export default ProtectedRoutes