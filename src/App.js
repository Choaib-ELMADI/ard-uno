import React from 'react';

import './App.css';
import { Navbar, Header, Services } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Services />
    </div>
  );
};

export default App;