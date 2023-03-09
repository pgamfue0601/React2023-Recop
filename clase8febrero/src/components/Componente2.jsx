import React, { useContext } from 'react'
import { ContextNew } from '../contexts/ContextNew';
import Componente3 from './Componente3'

const Componente2 = () => {
    const miUsuario = useContext(ContextNew);
  return (
    <div>
        <h2>Componente2</h2>
        {miUsuario.nombre && 
        <ul style={{listStyleType:"none"}}>
            <li>DNI: {miUsuario.usuario.DNI}</li>
            <li>Nombre: {miUsuario.usuario.nombre}</li>
            <li>Edad: {miUsuario.usuario.edad}</li>
        </ul>}
        <Componente3/>
    </div>
  )
}

export default Componente2