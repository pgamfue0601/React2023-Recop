import React, { useContext } from 'react'
import { InfoContext } from '../contexts/InfoContext'

const Componente5 = () => {
    const miEdad = useContext(InfoContext);
    function handleEdad(){
        miEdad.setEdad((edad) => edad + 1)
    }
  return (
    <div>
        <h1>Componente5</h1>
        <button onClick={handleEdad}>Añadir edad</button>
    </div>
  )
}

export default Componente5