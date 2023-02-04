import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work, About, Create, Testimonials, Footer } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <About />
      <Create />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;