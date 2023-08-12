import React from 'react';
import video from '../images/1086710408-preview.mp4';
import video2 from '../images/video2.mp4';
import video3 from '../images/video3.mp4';
import video4 from '../images/video4.mp4';
import video5 from '../images/video5.mp4';
const AboutPage = () => {
  return (
    <div className="container backcolor">
      <div className="row">
        <div className="col-md-6">
          <video controls className="w-100">
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <p>MicroAgulhamento</p>
        </div>
        <div className="col-md-6">
          <video controls className="w-100">
            <source src={video2} type="video/mp4" />
          </video>
          <p>Extensão de Pestanas</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <video controls className="w-100">
            <source src={video3} type="video/mp4" />
          </video>
          <p>Design de Sobrancelhas</p>
        </div>
        <div className="col-md-6">
          <video controls className="w-100">
            <source src={video4} type="video/mp4" />
          </video>
          <p>Maquilhagem</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <video controls className="w-100">
            <source src={video5} type="video/mp4" />
          </video>
          <p>Limpeza de Pele Profunda</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
