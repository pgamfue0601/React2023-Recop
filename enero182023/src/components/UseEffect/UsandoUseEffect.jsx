// --- Imports ---
import React, {useEffect, useState} from 'react'

// --- Variables globales o initialState ---
const stateInitialContador1 = 0;
const stateInitialContador2 = 0;

function UsandoUseEffect() {

    // --- Declaración de los estados ---
    const [contador1, setContador1] = useState(stateInitialContador1);
    const [contador2, setContador2] = useState(stateInitialContador2);
  
    // --- Declaración de los Efectos ---
    useEffect(() => {
      console.log("Estoy ejecutando mi efecto cuando cambie el contador1.");
    },[contador1]);

    useEffect(() => {
        console.log("Estoy ejecutando mi efecto cuando cambie el contador1 o contador2.");
      },[contador1, contador2]);

    // --- Lógica de funciones ---

    const handleClickContador1 = () =>{
        // setContador1(contador1+1);
        setContador1((newcontador)=> newcontador+1);
    }

    const handleClickContador2 = () =>{
        // setContador2(contador2+1);
        setContador2((newcontador)=> newcontador+1);
        setContador2((newcontador)=> newcontador +10);
    }

    return (
        // --- Pintamos con JSX el componente ---
    <>
        <div>
            Contador1: {contador1}
            <hr />
            Contador2: {contador2}
            <hr />
            Ejemplo del uso de UseEffect y las dependencias:
            <div>
                <button onClick={() => handleClickContador1()}>Aumentar Contador1</button>
                <br /><br />
                <button onClick={() => handleClickContador2()}>Aumentar Contador2</button>
            </div>
        </div>
    </>
  )
}

export default UsandoUseEffect