import React from 'react';
// import { Link } from 'react-router-dom';

import './Project.css';
import { images } from '../../constants/index';
const someData = [
  {
    img: images.solar_panel_1,
    link: "https://get-3d.netlify.app/models/solar-light-follower",
  },
  {
    img: images.servo_motor,
    link: "https://get-3d.netlify.app/models/micro-servo-sg90",
  },
  {
    img: images.solar_panel_2,
    link: "https://get-3d.netlify.app/models/solar-light-follower",
  },
];



const SolarPanel = () => {
  return (
    <div className='app__project-main'>
      <div style={{ textAlign: 'center' }} className='app__project-header'>
          <h1>DIY Arduino Solar Light Tracker</h1>
          <div className='app__project-header-creator'>
            <img src={ images.profile } alt="Choaib ELMADI" />
            <h4>By <a href="https://choaib-elmadi.netlify.app/" target="_blank" rel="noreferrer">Choaib ELMADI</a></h4>
          </div>
          <div className='app__project-banner'>
            <img src={ images.arduino_solar_light } alt="arduino solar panel" />
          </div>
      </div>
      <div className='app__project-body'>
        <h3 className='intro'>
          An Arduino solar light tracker is a device that uses an Arduino
          microcontroller to measure the amount of light in the surrounding 
          environment and provide feedback based on the measured light levels. 
          The device can be designed to trigger certain actions, such as turning 
          on or off a solar-powered light, depending on the amount of light available.
        </h3>
        <div className='steps'>
          <h2>So, these are the steps we're going to follow to complete this project :</h2>
          <ol>
            <h3><li><a href="#project-3d-model">Arduino Light Tracker 3D Model</a></li></h3>
            <h3><li><a href="#project-3d-parts">3D Printing The Parts</a></li></h3>
            <h3><li><a href="#project-parts-assembly">Assembling The Panel Parts</a></li></h3>
            <h3><li><a href="#project-circuit">Arduino Circuit Diagram</a></li></h3>
            <h3><li><a href="#project-code">Arduino Code</a></li></h3>
          </ol>
        </div>

        <div id="project-3d-model" className='model-3d'>
          <h1>Light Tracker 3D Model</h1>
          <h3>
            To begin with, I designed the light tracker using Solidworks 3D 
            modeling software. It consist of the Base, the Panel, a Servo Motor 
            SG90 and two Photoresistor LDR (Light Dependent Resistor).
          </h3>
          <div className='imgs-container'>
            {
              someData.map((item, i) => (
                <div className='item'>
                  <div 
                    className='image' 
                    key={ i }
                  >
                    <img src={ item.img } alt="light tracker 3d model" />
                  </div>
                  <h4><a className='view' href={ item.link } target='_blank' rel='noreferrer'>View / Download</a></h4>
                </div>
              ))
            }
          </div>
        </div>

        <div id="project-3d-parts" className='parts-3d'>
          <h1>3D Printing the Solar Panel</h1>
          <h3>
            Currently, I don't have a 3d printing machine. 
            But I'm looking forward to buying one. 
            So we are just going to use some Cardboard.
          </h3>
        </div>

        <div id="project-parts-assembly" className='parts-assembly'>

        </div>

        <div id="project-circuit" className='circuit'>

        </div>

        <div id="project-code" className='code'>

        </div>

      </div>
    </div>
  );
};

export default SolarPanel;