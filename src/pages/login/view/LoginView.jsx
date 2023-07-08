import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/context/AuthContext'
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

const LoginView = () => {

  const FORMS = {
    SIGN_IN:"SIGN_IN",
    SIGN_UP:"SIGN_UP",
  };

  const [showForm, setShowForm] = useState(FORMS.SIGN_IN);  
  const {login} = useContext(AuthContext);
    
  const handleShowForm = () => {
    setShowForm((prevState)=> 
    prevState=== FORMS.SIGN_IN? FORMS.SIGN_UP : FORMS.SIGN_IN)
  };

  return (
    <div>
      <div>
        {showForm === FORMS.SIGN_IN ? < SignUpForm /> : < SignInForm /> }          
      </div>

      <div>
        <button onClick = {handleShowForm}>
        { showForm === FORMS.SIGN_IN? "Iniciar Sesion" : "Registrate" }
        </button>
      </div>
    </div>
  )
}

export default LoginView