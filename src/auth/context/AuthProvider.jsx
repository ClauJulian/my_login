import { useReducer } from 'react';
import React from 'react';
import {AuthContext} from './AuthContext';
import { AUTH_TYPES,AUTH_KEY_LOCAL_STORAGE, authReducer, authInitialState, authInitializer } from '../reducer/AuthReducer'

const AuthProvider = ({children}) => {

  const [authState, dispatch]= useReducer(authReducer, authInitialState, authInitializer);  
  
  const login = (user) => {
    dispatch({
        type: AUTH_TYPES.LOGIN,
        payload: user,
    });

    localStorage.setItem(
        AUTH_KEY_LOCAL_STORAGE, 
        JSON.stringify({isLoggedIn:true})
    );
  };

  const logout = () => {
    dispatch({
        type:AUTH_TYPES.LOGOUT,
    });

    localStorage.removeItem(AUTH_KEY_LOCAL_STORAGE);
  }  

  return (
    <AuthContext.Provider value={{
        user:authState.user,
        isLoggedIn:authState.isLoggedIn,
        login,
        logout
    }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider