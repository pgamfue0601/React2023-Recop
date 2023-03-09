import React, { useContext } from 'react'
import { InfoContext } from '../contexts/InfoContext'
import Componente4 from './Componente4'

const Componente3 = () => {
    const miEdad = useContext(InfoContext);

    function handleEdad(){
        miEdad.setEdad((edad) => edad - 1)
    }

  return (
    <div>
        <h3>Componente3</h3>
        <button onClick={handleEdad}>Quitar edad</button>
        <Componente4/>
    </div>
  )
}

export default Componente3