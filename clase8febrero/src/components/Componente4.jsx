import React, {useContext} from 'react'
import { ContextNew } from '../contexts/ContextNew';
import { InfoContext } from '../contexts/InfoContext'

const Componente4 = () => {
    const miEdad = useContext(InfoContext);
    const miUsuario = useContext(ContextNew)

    function handleForm(){
        event.preventDefault()
        const DNI = document.querySelector("#dni").value;
        const nombre = document.querySelector("#nombre").value;
        const edad = document.querySelector("#edad").value;
        const usuarioNuevo = {DNI, nombre, edad}

        miUsuario.setUsuario(usuarioNuevo);
    }
  return (
    <div>
        <h4>Componente4</h4>
        <h4>Edad: {miEdad.edad}</h4>

        <form>
            <div>
                <input type="text" placeholder='nombre' id='nombre'/>
                <input type="text" placeholder='DNI' id='dni'/>
                <input type="number" placeholder='edad' id='edad'/>
            </div>
            <div>
                <button onClick={handleForm}>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Componente4