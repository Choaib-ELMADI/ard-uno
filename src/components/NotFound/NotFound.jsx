import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';



const NotFound = () => {
  return (
    <div className='app__not-found'>
      <h1>Lost Your Way?</h1>
      <Link to="/" className='link'><h1>Go Home</h1></Link>
    </div>
  );
}

export default NotFound;