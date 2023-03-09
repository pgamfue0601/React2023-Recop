import './App.css';
import DatosAPI from './components/DatosAPI/DatosAPI';
import PeliculasAPI from './components/PeliculasAPI/PeliculasAPI';
import PeliculaViewer from './components/PeliculasAPI/PeliculaViewer';
import UsandoUseEffect from './components/UseEffect/UsandoUseEffect';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { useState } from 'react';

const initialStatePeli= "0";

function App() {
  const [idPeli, setIdPeli] = useState(initialStatePeli);
  console.log(idPeli);
  return (
    <div className="App mt-5">
      {/* <UsandoUseEffect/> */}
      {/* <DatosAPI/> */}
      <Container>
        <Row>
          <Col xs={4}><PeliculasAPI setIdPeli={setIdPeli}/></Col>
          <Col md="auto"><PeliculaViewer idPeli={idPeli}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
