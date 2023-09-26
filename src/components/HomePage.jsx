import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../images/photo1.jpg';
import image2 from '../images/photo2.jpg';
import image3 from '../images/foto3.jpg';
import Carol from '../images/carol.jpg';
import './HomePage.css'; // Importe seu arquivo CSS
import ContactForm from './Contato';
import { NavLink } from 'react-router-dom';
const HomePage = () => {
  const location = useLocation();
  const showBackButton = location.pathname !== '/';
  return (
    <div className="backcolor">
      <h4 className="center color">
        <NavLink to={'contact'}>
          <button className="agendar-button">Agende já a sua sessão!</button>
        </NavLink>
      </h4>
      <div className="profile">
        <img src={Carol} alt="Carol" className="foto" />
        <h1 id="nome">Carol Feitosa</h1>
        <p id="apresentacao">
          Olá, meu nome é Ana Caroline Feitosa e sou uma maquiadora apaixonada
          pelo meu trabalho. Ao longo dos anos, adquiri uma experiência valiosa
          e aprimorei minhas habilidades, tornando-me uma profissional altamente
          qualificada e reconhecida no ramo da maquiagem. Desde a minha
          infância, a maquiagem despertou em mim uma paixão e uma criatividade
          inigualáveis. Lembro-me de passar horas diante do espelho,
          experimentando diferentes cores, texturas e estilos. Foi nesse momento
          que percebi que a maquiagem era muito mais do que um simples toque
          estético, era uma forma de arte que podia transformar não apenas a
          aparência das pessoas, mas também sua autoestima e confiança. Busquei
          constantemente aprimorar minhas habilidades, participando de cursos e
          treinamentos em instituições renomadas. Com cada novo conhecimento
          adquirido, minha paixão pela maquiagem crescia ainda mais. Essa busca
          incessante pela excelência me ajudou a desenvolver uma visão apurada
          para as últimas tendências e técnicas, permitindo que eu ofereça
          serviços de qualidade e esteja sempre atualizada no mundo da beleza.
        </p>
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
