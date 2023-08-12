import React, { useState, useEffect } from 'react';
import { CardGroup, Card } from 'react-bootstrap';
import image1 from '../images/photo1.jpg';
import image2 from '../images/photo2.jpg';
import image3 from '../images/foto3.jpg';
import image4 from '../images/photo4.jpg';
import image5 from '../images/photo5.jpg';
import bootstrap from 'bootstrap';
const ProjectsPage = props => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(props.projects);
  }, [props.projects]);

  return (
    <div className="backcolor">
      <h1>Estética</h1>
      <div className="d-flex justify-content-center">
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Design de Sobrancelhas</Card.Title>
              <Card.Text>
                Convido-vos a conhecer a paixão pelo meu trabalho, o mundo da
                estética facial. Focada nos meus objetivos e nas expectativas,
                procuro dar vida a cada olhar ao desenhar as mais belas e
                delicadas sobrancelhas. Adquiri a minha experiência no Brasil e
                no Dubai, onde passei os últimos anos a aperfeiçoar esta área da
                estética. Agora, em Portugal, ponho em prática o meu
                conhecimento em Microblading, Design de Sobrancelhas com ou sem
                Henna e Threading, partilhando convosco parte do meu portefólio
                de resultados. Foco, perfeccionismo e sentido estético é o que
                me define. Caroline Feirtosa Chaves Especialista em Sobrancelhas
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Extensão de Pestanas</Card.Title>
              <Card.Text>
                O serviço de beleza de referência comigo, com resultados
                imediatos e que vão destacar os seus olhos e realçar a sua
                beleza e sensualidade. A extensão de pestanas é uma técnica que
                consiste na aplicação de filamentos sintéticos em seda, com
                comprimentos, espessuras e curvaturas diferentes, sobre a sua
                pestana. É um método que permite intensificar o seu olhar,
                tornando-o mais aberto, intenso e sedutor. Por esse motivo, é
                ideal para quem tem poucos fios de pestana ou umas pestanas
                curtas, e também para quem tem a pálpebra descaída.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Micro Agulhamento</Card.Title>
              <Card.Text>
                O Microagulhamento ou microneedling é um tratamento eficaz e
                seguro com excelentes resultados para quem quer retardar o
                envelhecimento da pele. É um método de rejuvenescimento em que a
                finalidade é estimular a produção de novas fibras de colagénio e
                elastina. É um dos tratamentos estéticos mais utilizados
                atualmente para renovar a beleza da pele do rosto.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image4} />
            <Card.Body>
              <Card.Title>Limpeza de Pele Profunda</Card.Title>
              <Card.Text>
                A Limpeza de Pele Profunda é um cuidado completo de beleza para
                o seu rosto, com resultado imediato após o tratamento. Se tem
                áreas críticas no rosto, com pontos negros (comedons),
                sujidade/oleosidade e sente que o rosto está baço e sem vida, a
                Limpeza Profunda é a mais indicada para o seu caso! Com duração
                prolongada, esse tratamento minucioso trará luz e vitalidade
                para o seu rosto, experimente!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={image5} />
            <Card.Body>
              <Card.Title>Maquilhagem</Card.Title>
              <Card.Text>
                Olá, meu nome é Ana Caroline Feitosa e sou uma maquiadora
                apaixonada pelo meu trabalho. Ao longo dos anos, adquiri uma
                experiência valiosa e aprimorei minhas habilidades, tornando-me
                uma profissional altamente qualificada e reconhecida no ramo da
                maquiagem. Desde a minha infância, a maquiagem despertou em mim
                uma paixão e uma criatividade inigualáveis. Lembro-me de passar
                horas diante do espelho, experimentando diferentes cores,
                texturas e estilos. Foi nesse momento que percebi que a
                maquiagem era muito mais do que um simples toque estético, era
                uma forma de arte que podia transformar não apenas a aparência
                das pessoas, mas também sua autoestima e confiança. Busquei
                constantemente aprimorar minhas habilidades, participando de
                cursos e treinamentos em instituições renomadas. Com cada novo
                conhecimento adquirido, minha paixão pela maquiagem crescia
                ainda mais. Essa busca incessante pela excelência me ajudou a
                desenvolver uma visão apurada para as últimas tendências e
                técnicas, permitindo que eu ofereça serviços de qualidade e
                esteja sempre atualizada no mundo da beleza.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default ProjectsPage;
