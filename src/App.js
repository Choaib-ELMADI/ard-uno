import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work, About } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <About />
    </div>
  );
};

export default App;