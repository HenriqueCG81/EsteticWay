import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/photo1.jpg';
import image2 from '../images/photo2.jpg';
import image3 from '../images/foto3.jpg';
import image4 from '../images/photo4.jpg';
import image5 from '../images/photo5.jpg';
import './ProjectsPage.css';
const ProjectsPage = props => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <div className="backcolor" id="color">
      <h1 className="text-center text-dark">Estética</h1>
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image1}
              alt="Design de Sobrancelhas"
            />
            <div className="text-center text-dark">
              <h3>Design de Sobrancelhas</h3>
              <p>
                <strong>
                  Esta técnica é perfeita pra você que quer estar com o olhar
                  mais bonito e harmonioso. Este tratamento inclui as técnicas
                  com pinça, linha e henna.
                </strong>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image2}
              alt="Extensão de Pestanas"
            />
            <div className="text-center text-dark">
              <h3>Extensão de Pestanas</h3>
              <p>
                <strong>
                  Extensão de pestanas com volume clássico: Este tratamento
                  envolve a aplicação de uma pestana de alta qualidade em uma
                  pestana natural, dando-lhes leve volume e comprimento. Com
                  base no formato e preferência do seu olho, criarei um visual
                  exclusivo pra você. Extensão de pestanas com volume natural
                  (híbrido): Este tratamento exclusivo combina o melhor dos dois
                  mundos! Combina pestanas clássica e volumosas proporcionando
                  um acabamento natural com um toque de volume. Aplicaremos uma
                  combinação de 1 a 3 pestanas de alta qualidade em um fio
                  natural. Extensão de pestanas com volume russo Essa técnica é
                  ideal para pessoas que desejam um efeito mais volumoso e
                  dramático, mas ainda assim natural. Neste tratamento aplicamos
                  4, 5 e 6 pestanas de alta qualidade em uma pestana natural,
                  dando mega volume as suas pestanas.
                </strong>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image3}
              alt="Micro Agulhamento"
            />
            <div className="text-center text-dark">
              <h3>Micro Agulhamento</h3>
              <p>
                <strong>
                  Esse é um dos melhores procedimentos para a sua pele. Este
                  tratamento consiste em fazer micro furos na pele para
                  estimular a função dos fibroblastos, as células responsáveis
                  por produzir colágeno, de forma a promover a restauração da
                  pele. O que nomeamos "Drug delivery" nada mais é que a entrega
                  de ativos que se usa durante o procedimento de
                  microagulhamento. Esses ativos podem variar de acordo com o
                  objetivo do tratamento, podendo incluir vitaminas, ácido
                  hialurônico, fatores de crescimento, entre outros. O
                  microagulhamento com drug delivery é indicado para tratamentos
                  de rejuvenescimento facial, redução de cicatrizes de acne,
                  melasma entre outros.
                </strong>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image4}
              alt="Limpeza de pele com peeling de diamante"
            />
            <div className="text-center text-dark">
              <h3>Limpeza de pele com peeling de diamante</h3>
              <p>
                <strong>
                  Me consulte para que eu possa te oferecer um tratamento facial
                  personalizado com duração de 1h/00/ 1h30 para cada condição de
                  pele. Esse tratamento não consiste apenas em uma limpeza de
                  pele profunda, mas também em recuperar e hidratar a sua pele.
                  O peeling de diamante é um procedimento minimamente invasivo
                  usado para recuperar o tom e a textura geral da pele. Durante
                  o procedimento, a ponteira de diamante é passada sobre a pele,
                  criando uma sucção que ajuda a remover as células mortas e
                  impurezas. A limpeza de pele associada ao peeling de diamante
                  é ideal para peles com acne, cicatrizes, manchas, rugas finas
                  e linhas de expressão.
                </strong>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={image5}
              alt="Maquilhagem"
            />
            <div className="text-center text-dark">
              <h3>Maquilhagem</h3>
              <p>
                <strong>
                  Ofereço serviços profissionais de maquilhagem para eventos
                  especiais, como casamentos, formaturas, festas e muito mais.
                  Além da minha formação em estética e cosmética, participei de
                  vários cursos como MakeUp Atelier Paris e Kryolan em Dubai e
                  estou sempre buscando melhorar minhas técnicas para sempre
                  oferecer o melhor. Entre em contato comigo e agende uma
                  consulta para descobrir como posso ajudá-la a ficar ainda mais
                  bonita e confiante para o seu próximo evento ou book de fotos.
                </strong>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectsPage;
