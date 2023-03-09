import { useState } from 'react'
import './App.css'
import FormularioDatos from './components/FormularioDatos'
import FormularioEjercicio from './components/FormularioEjercicio'
import { Col, Container, Row } from 'react-bootstrap'
import FormularioCard from './components/FormularioCard'

const initialStateAPI = {};
function App() {
  const [API, setAPI] = useState(initialStateAPI);
  return (
    <div className="App">
      {/* <FormularioDatos/> */}
      <Container>
        <Row>
          <Col xs={4}><FormularioEjercicio setAPI={setAPI}/></Col>
          <Col md="auto"><FormularioCard api={API}/></Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default App
