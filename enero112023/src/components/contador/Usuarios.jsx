import React, { useState } from 'react'
import uuid from 'react-uuid';

const usuariosIniciales = [
    {
        id: 1,
        nombre: "Paco",
        edad: 0,
        img: "urlImagen",
    },
    {
        id: 2,
        nombre:"Maria",
        edad:23,
        img: "urlImagen",
    }
]

function Usuarios() {
    const [user, setUser] = useState(usuariosIniciales);

    const handleInsertar = () =>{
        // Vamos a insertar un objeto nuevo SIN CAMBIAR EL OBJETO DE PARTIDA usuariosIniciales.
        const newObjeto = [...usuariosIniciales];
        const nuevoUsuario = {
            id: 3,
            nombre: "Pepo",
            edad: 64,
            img: "urlImagen",
        }
        newObjeto.unshift(nuevoUsuario);
        setUser(newObjeto);
    }

  return (
    <>
        {user.map((usuario)=>{
        return(
            <div key={uuid()}>
            Nombre: {usuario.nombre}<br/>
            Edad: {usuario.edad}<br />
            Imagen: {usuario.img}<br/><br/>
            </div>
        )
            
        })}
        

        <div>
            <button onClick={()=>handleInsertar()}>Insertar usuario</button>
        </div>
    </>
    

    
  )
}

export default Usuarios