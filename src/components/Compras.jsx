import React from 'react';
import AppCss from '../App.css';
import backgroundimage from '../images/back.jpg';
class App extends React.Component {
  state = {
    services: [
      { id: 1, name: 'Micro Agulhamento (pack)', price: 80 },
      { id: 2, name: 'Limpeza de Pele', price: 50 },
      { id: 3, name: 'Design de Sobrancelhas', price: 15 },
      { id: 4, name: 'Maquilhagem', price: 50 },
      { id: 5, name: 'Extensao de Pestanas', price: 25 }
    ]
  };

  render() {
    const { services } = this.state;

    const backgroundStyle = {
      backgroundImage: `url(${backgroundimage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      heigth: '100vh'
    };

    return (
      <div className="App backcolor" style={backgroundStyle}>
        <div className="background-image"></div>
        <div className="content">
          <h1>Estética App</h1>
          <h2>Tabela de Preços:</h2>
          <table className="ui celled table">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>€ {service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <a
            href="https://www.instagram.com/carolfeitosapt/"
            target="_blank"
            rel="noopener noreferrer"
            className="marginBInst"
          >
            <strong> @carolfeitosapt</strong>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
