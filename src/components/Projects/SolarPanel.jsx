import React from 'react';
import { Link } from 'react-router-dom';

import './Project.css';



const SolarPanel = () => {
  return (
    <div style={{ textAlign: 'center' }} className='app__project-main'>
        <h1>Solar Light Detector</h1>
        <h3>This project is not ready yet, but we are working on it.</h3>
        <h2>Stay tuned...</h2>
        <Link to='/' className='link'><h1>_Home_</h1></Link>
    </div>
  );
};

export default SolarPanel;