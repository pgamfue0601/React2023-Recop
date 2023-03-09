import React, { useState } from 'react';

function Contador() {
    // const miEstado = useState(0);
    // const valorEstado = miEstado[0];
    // const funcionCambiarMiEstado = miEstado[1];
    const [condicion, setCondicion]= useState(true);
    const [contador, setContador] = useState(0);
    const handleIncrementar = () => {
        setContador(contador+1);
        // console.log("Estoy en la funcion contador: ", contador);
    }

    const handleDecrementar = () => {
        setContador(contador-1);
    }

    const handleCambiar = () =>{
        setCondicion(!condicion);
    }
  return (
    <>
        <h1>{contador}</h1>
        <button onClick={handleIncrementar}>Incrementar</button>
        <button onClick={handleDecrementar}>Decrementar</button>
        <button onClick={() =>handleCambiar()}>Cambiar</button>
        
        {
            condicion && <h1>La acción es true</h1>
        }
    </>
  );
}


export default Contador;