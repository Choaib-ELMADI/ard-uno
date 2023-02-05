import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Navbar, Header, Services, Work, About, Create, Testimonials, Footer, Cookie, Privacy } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={ 
          <>
            <Header />
            <Services />
            <Work />
            <About />
            <Create />
            <Testimonials />
            <Footer />
          </>
         }
        />
        <Route path='/privacy' element={ <Privacy /> } />
        <Route path='/cookie' element={ <Cookie /> } />
      </Routes>
    </div>
  );
};

export default App;