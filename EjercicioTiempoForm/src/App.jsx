import { useContext, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './App.css'
import HoraPrecio from './components/HoraPrecio';
import NavbarProyecto from './components/NavbarProyecto'
import { LoginContext } from './contexts/LoginContext';

function App() {
  const miUsuario = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(miUsuario.usuario==null){
      navigate('/login');
    }
  }, [miUsuario.usuario]);
  

  return (
    <div className="App">
      <NavbarProyecto/>
      <Container>
        <HoraPrecio/>
      </Container>
    </div>
  )
}

export default App
