import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { routes } from './data';
import { Navbar, Header, Services, Work, About, Create, Testimonials, Footer, Cookie, Privacy, NotFound } from './components/index';



const App = () => {
  const routePaths = routes.map(({path, element}, i) =>
    <Route
      key={ i }
      path={ path }
      element={ element }
    />
  );

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
          </>
         }
        />
        { routePaths }
        <Route path='/privacy' element={ <Privacy /> } />
        <Route path='/cookie' element={ <Cookie /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;