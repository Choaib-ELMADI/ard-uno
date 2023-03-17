import React, { lazy } from 'react';
// import { Link } from 'react-router-dom';

import './Project.css';
import { images } from '../../constants/index';



const SolarPanel = () => {
  return (
    <div className='app__project-main'>
      <div style={{ textAlign: 'center' }} className='app__project-header'>
          <h1>DIY Arduino Solar Light Detector</h1>
          <div className='app__project-header-creator'>
            <img src={ images.profile } alt="Choaib ELMADI" />
            <h4>By <a href="https://choaib-elmadi.netlify.app/" target="_blank" rel="noreferrer">Choaib ELMADI</a></h4>
          </div>
          <div className='app__project-banner'>
            <img loading={ lazy } src={ images.arduino_solar_light } alt="arduino solar panel" />
          </div>
      </div>
      
    </div>
  );
};

export default SolarPanel;