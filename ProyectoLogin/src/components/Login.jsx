import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';


const Login = () => {
    const miLogin = useContext(LoginContext);
    const { register, handleSubmit, formState:{errors}, watch } = useForm();
    const redireccion = useNavigate();

    
    
  return (
    <>
        <form>
            <div>
                <label>Usuario:</label>
                <input type="text" {...register("usuarioLogin",{required:true})}/>
                {errors.usuarioLogin?.type === "required" && <p style={{color:"red"}}>Introduzca un nombre</p>}
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" {...register("contraLogin",{required:true})} />
                {errors.contraLogin?.type === "required" && <p style={{color:"red"}}>Introduzca una contraseña</p>}
            </div>
            <input type="submit" value="Iniciar sesión" />
        </form>
    <br/>
    <GoogleOAuthProvider clientId="631706467024-sf6e24740chuupv6c8mafu4mr78g02c5.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={() =>{
                miLogin.setLogin(true);
                redireccion('/');
            }}
            onError={() => {
                console.log('El login ha fallado.');
            }}
            useOneTap
        />
    </GoogleOAuthProvider>
    
    <hr />
    </>
  )
}

export default Login