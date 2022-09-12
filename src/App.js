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
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true);
    // fetch('http://localhost:3000')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setLoading(false);
    //   });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
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
