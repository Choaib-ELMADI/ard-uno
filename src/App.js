import React from 'react';

import './App.css';
import { Navbar, Header, Services, Work } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
      <Work />
    </div>
  );
};

export default App;