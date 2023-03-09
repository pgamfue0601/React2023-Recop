import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import md5 from 'md5';
import { LoginContext } from '../contexts/LoginContext';
import { useNavigate } from 'react-router-dom';
import { guardar } from '../helpers/añadirFirebase';
import { leerDatos } from '../helpers/leerFirebase';

const Login = () => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const miUsuario = useContext(LoginContext);
  const navigate = useNavigate();

  const enviarDatos = (data) =>{
    // async function leer(){
    //   leerDatos();
    // }
    // leer();
    const usuarioObj = {
      email: data.email,
      nombre: data.usuario,
      password: md5(data.password),
    }

    // async function enviar(){
    //   guardar(usuarioObj);
    // }
    // enviar();

    miUsuario.setUsuario(usuarioObj);
    navigate("/precioluz");
  }

  return (
    <>
      <Form className='w-50 row mx-auto mt-5' onSubmit={handleSubmit(enviarDatos)}>
        <Form.Group className="mb-3" controlId="user">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder="Introduzca su usuario" {...register("usuario", {required:true})}/>
          {errors.usuario?.type === "required" && <p style={{color:"red"}}>Introduzca un usuario</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Introducir su contraseña" {...register("password", {required:true})}/>
          {errors.password?.type === "required" && <p style={{color:"red"}}>Introduzca una contraseña</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Direccion de correo</Form.Label>
        <Form.Control type="email" placeholder="Introducir un email" {...register("email", {required:true, pattern:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g})}/>
        {errors.email?.type === "required" && <p style={{color:"red"}}>Introduzca un email</p>}
        {errors.email?.type === "pattern" && <p style={{color:"red"}}>El email está mal escrito</p>}
        </Form.Group>

        <Button variant="info" className='w-25 mx-auto' type="submit">
          Enviar
        </Button>
    </Form>
    </>
  )
}

export default Login