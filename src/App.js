import React from 'react';

import './App.css';
import { Header, Navbar } from './components/index';



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;