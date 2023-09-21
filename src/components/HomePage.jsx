import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../images/photo1.jpg';
import image2 from '../images/photo2.jpg';
import image3 from '../images/foto3.jpg';
import Carol from '../images/carol.jpg';
import './HomePage.css'; // Importe seu arquivo CSS

const HomePage = () => {
  const location = useLocation();
  const showBackButton = location.pathname !== '/';

  return (
    <div className="backcolor">
      <h4 className="center color">Agende já a sua sessão!</h4>
      <div className="profile">
        <img src={Carol} alt="Carol" className="foto" />
        <h1 id="nome">Carol Feitosa</h1>
      </div>
      <CardGroup>
        <Card>
          <Link to="/about">
            <Card.Img variant="top" src={image1} className="img-thumbnail" />
          </Link>
          <Card.Body>
            <Card.Title>Videos</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Link to="/projects">
            <Card.Img variant="top" src={image2} className="img-thumbnail" />
          </Link>
          <Card.Body>
            <Card.Title>Serviços</Card.Title>
          </Card.Body>
        </Card>
        <Card>
          <Link to="/agendamento">
            <Card.Img variant="top" src={image3} className="img-thumbnail" />
          </Link>
          <Card.Body>
            <Card.Title>Lista de Preços</Card.Title>
          </Card.Body>
        </Card>
      </CardGroup>
      {showBackButton && (
        <Link to="/" className="btn btn-primary">
          Voltar
        </Link>
      )}
    </div>
  );
};

export default HomePage;
