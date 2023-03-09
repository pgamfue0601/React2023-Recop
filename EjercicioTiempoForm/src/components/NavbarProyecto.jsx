import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

const NavbarProyecto = () => {
  const miUsuario = useContext(LoginContext);
  const navigate = useNavigate();

  const cerrarSesion= () =>{
    miUsuario.setUsuario(null);
    navigate('/login');
  }

return (
  <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3 navbar-dark">
          <Container fluid>
            <Navbar.Brand className='text-light fw-bold ms-5'>Consulta tu Luz ES</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className=""
            >
              <Offcanvas.Header closeButton className='bg-dark text-light'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="fs-3 fw-bold">
                  Menú lateral
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='bg-dark text-light'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={cerrarSesion} className='fs-5 text-primary text-decoration-underline'>Cerrar sesión</Nav.Link>
                  <Button variant="outline-primary w-75"><Nav.Link href="#action2" className='fs-5'>Enviar información</Nav.Link></Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
)
}

export default NavbarProyecto