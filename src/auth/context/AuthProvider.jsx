import { useReducer } from 'react';
import React from 'react';
import {AuthContext} from './AuthContext';
import { authInit, authInitialState, authReducer } from '../reducer/AuthReducer'

const AuthProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(authReducer, authInitialState, authInit);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider