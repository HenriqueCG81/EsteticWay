import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../images/photo1.jpg';
import image2 from '../images/photo2.jpg';
import image3 from '../images/foto3.jpg';

const HomePage = () => {
  const location = useLocation();

  const showBackButton = location.pathname !== '/';

  return (
    <div className="backcolor">
      <h1 className="center">EsteticWay</h1>
      <CardGroup>
        <Card>
          <Link to="/about">
            <Card.Img variant="top" src={image1} className="img-thumbnail" />
          </Link>
          <Card.Body>
            <Card.Title>Video</Card.Title>
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
