import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../../config/firebase.config';

export const HomeView = () => {
  const { logout, user } = useAuth();
  
  const navigate  = useNavigate(); 

  const handleSignOut = async () => {   
      
      await signOut(auth);
      navigate("/login");
    }


  return (
    <div>
        <h1>HOME</h1>
        <h1>Bienvenido {user?.email}</h1>
        <button
        onClick={handleSignOut}
        >Cerrar Sesión</button>
    </div>
  )
}

export default HomeView