import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { signUp } from '../services/signUp.services';

export const SignUpForm = () => {

    const navigate  = useNavigate();
    const { login, isLoggedIn } = useAuth();
    
    const handleSubmit= async (event)=>{
        event.preventDefault();

        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());
        
        await signUp(data.email.toString(),data.password.toString());
       
        navigate("/");

    };

  return (
    <div>
        <h1>REGISTRATE</h1>
        <form onSubmit={handleSubmit}>            
            <div>
                <input type="mail" name="email" placeholder="mail" />
            </div>
            <div>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>    
        </form>
    </div>
  )
  }

export default SignUpForm