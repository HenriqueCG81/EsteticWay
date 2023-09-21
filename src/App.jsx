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

const App = () => {
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
                  <Link to="/contact" className="btn btn-primary corlogin me-2">
                    Agendamento
                  </Link>
                </div>
              </>
            }
          />
          <Route path="/contact" element={<Contato />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
