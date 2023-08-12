/* import { useState } from 'react'; */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ErrorPage from './components/ErrorPage';
import Agendamento from './components/Compras';
import Contato from './components/Contato';
import { Link } from 'react-router-dom';
/* import Login from './components/Login';
import Signup from './components/Signup'; */
const App = () => {
  /* const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const handleLoginEmailChange = e => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = e => {
    setLoginPassword(e.target.value);
  };

  const handleSignupEmailChange = e => {
    setSignupEmail(e.target.value);
  };

  const handleSignupPasswordChange = e => {
    setSignupPassword(e.target.value);
  };

  // Funções para realizar o login e o signup
  const handleLogin = () => {
    // Lógica de login aqui
    console.log('Login:', loginEmail, loginPassword);
    // Limpar os campos de login após o login ser realizado
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleSignup = () => {
    // Lógica de signup aqui
    console.log('Signup:', signupEmail, signupPassword);
    // Limpar os campos de signup após o signup ser realizado
    setSignupEmail('');
    setSignupPassword('');
  }; */
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/agendamento"
            element={
              <>
                <Agendamento />
                <div className="mt-3">
                  <Link to="/login" className="btn btn-primary corlogin me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-primary corlogin">
                    Signup
                  </Link>
                </div>
              </>
            }
          />
          <Route path="/contact" element={<Contato />} />
          {/*  
          <Route
            path="/login"
            element={
              <Login
                email={loginEmail}
                password={loginPassword}
                handleEmailChange={handleLoginEmailChange}
                handlePasswordChange={handleLoginPasswordChange}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Signup
                email={signupEmail}
                password={signupPassword}
                handleEmailChange={handleSignupEmailChange}
                handlePasswordChange={handleSignupPasswordChange}
                handleSignup={handleSignup}
              />
            }
          /> */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
