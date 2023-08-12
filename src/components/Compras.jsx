import React from 'react';
import AppCss from '../App.css';

class App extends React.Component {
  state = {
    services: [
      { id: 1, name: 'Micro Agulhamento', price: 80 },
      { id: 2, name: 'Limpeza de Pele', price: 40 },
      { id: 3, name: 'Design de Sobrancelhas', price: 25 },
      { id: 4, name: 'Maquilhagem', price: 50 },
      { id: 5, name: 'Extensao de Pestanas', price: 25 }
    ]
  };

  render() {
    const { services } = this.state;

    return (
      <div className="App backcolor">
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
                  <td>R$ {service.price}</td>
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
            @carolfeitosapt
          </a>
        </div>
      </div>
    );
  }
}

export default App;
