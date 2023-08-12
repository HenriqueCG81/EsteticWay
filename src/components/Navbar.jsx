import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <div className="center2" style={{ textAlign: 'center' }}>
      <Navbar
        bg="light"
        expand="lg"
        className="nav"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Navbar.Brand as={Link} to="/">
          EsteticWay.lda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto nav-center">
            {location.pathname !== '/' && (
              <Nav.Link as={Link} to="/" className="nav-link">
                Voltar
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/about" className="nav-link">
              Videos
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link">
              Serviços
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Agendar
            </Nav.Link>
            {/* 
            <Nav.Link as={Link} to="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="nav-link">
              Signup
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
