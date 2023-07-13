import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import { signOut } from '../../login/services/signOut.services';
import { AUTH_LOGOUT } from '../../../auth/reducer/AuthReducer';


export const HomeView = () => {
  
  const { state, dispatch } = useAuth();
  
  console.log(state);
  const navigate  = useNavigate(); 

  const handleSignOut =  async() => { 
    
      await signOut();
      
      localStorage.clear();
      
      dispatch({
        type: AUTH_LOGOUT,
      });
    
      navigate("/login");
    }


  return (
    <div>
        <h1>HOME</h1>
        <h1>Bienvenido {state.user.email}</h1>
        <button
        onClick={handleSignOut}
        >Cerrar Sesión</button>
    </div>
  )
}

export default HomeView