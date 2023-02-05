import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work, About, Create, Testimonials, Footer, Cookie } from './components/index';



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
      {/* <Privacy /> */}
      <Cookie />
    </div>
  );
};

export default App;