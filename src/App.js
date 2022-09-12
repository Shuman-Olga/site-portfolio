import React, { useState, useEffect } from 'react';

import './assets/scss/components/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Skills from './components/Skills';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <About />
          <Skills />
          <Portfolio />
          <Contacts />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
