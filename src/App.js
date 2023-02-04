import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work, About, Create } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <Work />
      <About />
      <Create />
    </div>
  );
};

export default App;