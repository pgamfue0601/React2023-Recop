import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import getUsers from '../../helpers/getUsers';

// Variables globales
const initialStateUsuarios = [];

const DatosAPI = () => {
    // Estados
    const [usuarios, setUsuarios] = useState(initialStateUsuarios);
    // Efectos
    useEffect(() => {
        traerUsuarios();
    }, [])
    
    // Lógica funcional (funciones)
    const traerUsuarios = () =>{
        // Función que gracias al helper getUsers, me devuelve los usuarios de la API reqres.in
        getUsers()
        .then(users =>{
            setUsuarios(users);
        })
        .catch((error)=> console.error(error));
    }

  return (
    <>
    <div className='container-fluid d-flex flex-column align-items-center'>
        {usuarios.map((usuario)=>{
            return(
                <Card className='text-center m-1' style={{ width: '18rem' }} key={usuario.id}>
                <Card.Img className='mx-auto' variant="top" src={usuario.avatar} alt={usuario.first_name} style={{borderRadius: "50%", width: "70%"}}/>
                <Card.Body>
                    <Card.Title>{`${usuario.first_name} ${usuario.last_name}`}</Card.Title>
                    <Card.Subtitle>{usuario.email}</Card.Subtitle>
                </Card.Body>
                </Card>
            )
        })}
        </div>
    </>
  )
}

export default DatosAPI;