import React from 'react';
import { Button,  Spacer, Text } from "@nextui-org/react";
import useLogin from '../hooks/useLogin';
import CustomInput from '../../../components/CustomInput/CustomInput';

export const SignInForm = () => {

    const { form, signInEmail, setForm } = useLogin();


  return (
    <>
        <Text h2>LOGIN</Text>
        <form 
            style={{
            display: "flex",
            flexDirection: "column",
            width:"30vw",
            minWidth: "300px",
            }}
            onSubmit={signInEmail}>           


            <CustomInput
            label={"Correo electrónico"}
            type={"email"}
            name={"email"}
            placeholder={"E M A I L @ L O G I N . C O M"}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <Spacer y={0.5}/>    

            <CustomInput
            label={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"* * * * * * * *"}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
             />

            <Spacer y={0.5}/>    
           
            <Button
                type="submit" 
                color={"secondary"}
                auto
            >
            Iniciar Sesion
            </Button>
            <Spacer y={2}/>    
        </form>
    </>
  )
  }

export default SignInForm