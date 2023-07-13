import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import useLogin from '../hooks/useLogin';
import { auth } from '../../../config/firebase.config';
import { Button,  Spacer, Text } from "@nextui-org/react";
import CustomInput from '../../../components/CustomInput/CustomInput';


export const SignUpForm = () => {

    const { form, setForm, signUpEmail } = useLogin();

  return (
    <>
        <Text h2> REGISTRATE </Text>
        <form 
            style={{
            display: "flex",
            flexDirection: "column",
            width:"30vw",
            minWidth: "300px",
            }}

            onSubmit={signUpEmail}>            
        
            
            <CustomInput 
            label={"Correo Electrónico"}
            type={"email"}
            name={"email"} 
            placeholder={"E M A I L @ L O G I N . C O M"} 
            onChange={(e) => setForm({ ...form, email: e.target.value })
            }
            />

            <Spacer y={0.5} />
        
            <CustomInput
            label={"Password"} 
            type={"password"}
            name={"password"}
            placeholder={"* * * * * * * *"} 
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            
            <Spacer y={0.5} />
            
            <Button
                type="submit"
                color={"secondary"}
                auto
            >
                Enviar
            </Button>
            <Spacer y={2}/>     
        </form>
    </>
  )
  }

export default SignUpForm