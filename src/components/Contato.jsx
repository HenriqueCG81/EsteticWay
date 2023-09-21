import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };

  const handleDateTimeChange = date => {
    setSelectedDateTime(date);
  };

  const handleAddressChange = event => {
    setAddress(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Ajusta o horário para a hora local do cliente
    const adjustedDateTime = selectedDateTime
      ? new Date(
          selectedDateTime.setMinutes(
            selectedDateTime.getMinutes() - selectedDateTime.getTimezoneOffset()
          )
        )
      : null;

    // Configuração do serviço de e-mail
    const serviceID = 'service_ijs4w55'; // ID do serviço de e-mail do EmailJS
    const templateID = 'template_qqmrkjw'; // ID do template de e-mail do EmailJS
    const userID = 'nDY3BVAVsoRCjvTsh'; // ID do usuário do EmailJS

    // Parâmetros do e-mail a serem enviados
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_datetime: adjustedDateTime, // Use o horário ajustado
      from_message: message,
      from_address: address
    };

    // Envio do e-mail
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(response => {
        console.log(
          'E-mail enviado com sucesso!',
          response.status,
          response.text
        );
        // Faça algo após o envio do e-mail, como exibir uma mensagem de sucesso
        alert(
          'Obrigado! Seu horário de serviço foi agendado e a Carol receberá um e-mail para confirmar.'
        );
        // Limpa o formulário
        setName('');
        setEmail('');
        setPhone('');
        setSelectedDateTime(null);
        setMessage('');
        setAddress('');
      })
      .catch(error => {
        console.error('Erro ao enviar o e-mail:', error);
        // Faça algo em caso de erro no envio do e-mail, como exibir uma mensagem de erro
      });
  };

  return (
    <div className="backcolor">
      <div>
        <p>Agende Ja!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateTime">Data e Hora do Serviço:</label>
          <DatePicker
            id="dateTime"
            className="form-control"
            selected={selectedDateTime}
            onChange={handleDateTimeChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
            placeholderText="Selecione a data e a hora"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Serviços</label>
          <input
            type="text"
            id="message"
            className="form-control"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            className="form-control"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agendar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
