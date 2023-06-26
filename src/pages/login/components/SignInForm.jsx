import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { signIn } from '../services/signIn.services';

export const SignInForm = () => {

    const navigate  = useNavigate();
    const { login, isLoggedIn } = useAuth();
    
    const handleSubmit= async (event)=>{
        event.preventDefault();
       
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());

        signIn(data.email.toString(),data.password.toString());  

        navigate("/", {replace:true});

    };

  return (
    <div>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>            
            <div>
                <input type="email" name="email" placeholder="mail" />
            </div>
            <div>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div>
                <button type="submit">Iniciar Sesion</button>
            </div>    
        </form>
    </div>
  )
  }

export default SignInForm