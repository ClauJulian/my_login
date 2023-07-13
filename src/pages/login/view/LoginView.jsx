import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../auth/context/AuthContext'
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';

import {  
  Card,
} from "@nextui-org/react";

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
    <Card
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      }}
    >
      <Card.Body>
        {showForm === FORMS.SIGN_IN ? < SignUpForm /> : < SignInForm /> }          
      </Card.Body>

      <Card.Body>
        <button onClick = {handleShowForm}>
        { showForm === FORMS.SIGN_IN? "Iniciar Sesion" : "Registrate" }
        </button>
      </Card.Body>
    </Card>
  )
}

export default LoginView