import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work, About, Create, Testimonials } from './components/index';



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
    </div>
  );
};

export default App;