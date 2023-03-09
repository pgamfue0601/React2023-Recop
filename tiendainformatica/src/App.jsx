import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import GuardarPiezas from './components/GuardarPiezas'
import MostrarPiezas from './components/MostrarPiezas'

import { getAll } from './helpers/accesoFirebase'

/** Crear un componente que sea un formulario llamado FormPiezas.jsx
 * Crear un compnente llamado TablaPiezas.jsx
 * Crear un fichero de configuración de Firebase dentro de src -> firebase-config.js
 * Crear un fichero dentro de helper llamado gestion-piezas.js que permita llamar a funciones para
   insertar, buscar, modificar y eliminar piezas de mi base de datos Firebase
 */

  //  1.- Instalar firebase con npm
  //  2.- Instalar bootstrap o materialui
  //  3.- Crear fichero firebase-config.js que contenga la firebaseConfig
  //  4.- Un console.log que muestre que he introducido una pieza en mi firestore database.

  // const piezaFake = {
  //   id:"",
  //   data: {
  //     nombre: "",
  //     precio: 0,
  //     marca: "",
  //     valoracion: 0,
  //   }
  // }
function App() {
  const [pieza, setPieza] = useState(null);
  const [editar, setEditar] = useState(null);

  useEffect(() => {
    getData();
  }, [])

  async function getData(){
    const data = await getAll();
    setPieza(data);
    return data;
  }
  

  return (
    <div className="App">
      <Container>
        <Row className="mt-4">
          <Col>
            <GuardarPiezas statePieza={{pieza, setPieza}} stateEditar={{editar, setEditar}}/>
          </Col>
          <Col>
            {pieza && <MostrarPiezas statePieza={{pieza, setPieza}} stateEditar={{editar, setEditar}}/>}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
