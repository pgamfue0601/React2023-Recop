import React, { useContext } from 'react'
import Componente2 from './Componente2'
import { useInfoContext } from '../contexts/InfoContext'
import { ColorContext } from '../contexts/ColorContext';

const Componente1 = () => {
    const { InfoContext } = useInfoContext();
    const miLogin = useContext(ColorContext);

    function handleLogin(){
        miLogin.setLogin(!miLogin.login);
    }
  return (
    <div>
        <h1>Componente1</h1>
        <button onClick={handleLogin} className="botonsito">Login</button>
        <Componente2/>
        Datos: {InfoContext}
    </div>
  )
}

export default Componente1