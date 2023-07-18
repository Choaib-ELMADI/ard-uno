import React from 'react';
// import { Link } from 'react-router-dom';
// import { BiCoffeeTogo } from 'react-icons/bi';
// import { FaPatreon } from 'react-icons/fa';
// import { AiFillInstagram } from 'react-icons/ai';

import './Project.css';
import { images } from '../../constants/index';

// const support = [
//   {
//     name: "Bye Me Coffe",
//     icon: <BiCoffeeTogo className='icon' fill='white' />,
//     link: "https://www.buymeacoffee.com/choaib.elmadi",
//   },
//   {
//     name: "Patreon",
//     icon: <FaPatreon className='icon' fill='black' />,
//     link: "https://www.patreon.com/user?u=81408575",
//   },
//   {
//     name: "Instagram",
//     icon: <AiFillInstagram className='icon' fill='white' />,
//     link: "https://www.instagram.com/choaib_elmadi",
//   },
// ]



const RadioControl = () => {
  return (
    <div className='app__project-main rc'>
      <div style={{ textAlign: 'center' }} className='app__project-header'>
          <h1>DIY Arduino Radio Controller</h1>
          <div className='app__project-header-creator'>
            <img src={ images.profile } alt="Choaib ELMADI" />
            <h4>By <a href="https://elmadichoaib.vercel.app" target="_blank" rel="noreferrer">Choaib ELMADI</a></h4>
          </div>
          <div className='app__project-banner'>
            <img src={ images.rc_radio_control } alt="arduino radio control" />
          </div>
      </div>
      <div className='app__project-project'>
        <div className='app__project-body'>
          <h3 className='intro'>
            Introducing our <span className='keyword'>Arduino-based radio controller</span>, designed to make remote control of your robotic projects a breeze! 
            This innovative controller utilizes an Arduino Nano to read data from two joysticks and wirelessly transmit it to 
            another Arduino Nano, via an NRF24L01 module.
            <br />
            <br />
            <span className='keyword'>The Arduino Nano</span> is a small, powerful microcontroller that's perfect for this type of project. It's easy to program 
            and can be customized to meet your specific needs. With its compact size, you can easily take it with you wherever 
            you go, making it ideal for controlling robots, drones, or other projects from a distance.
            <br />
            <br />
            <sapn className='keyword'>The NRF24L01 module</sapn> is a wireless communication module that allows you to send and receive data over a distance 
            of up to 1000 meters. This makes it perfect for controlling your robot from a distance, without the need for messy 
            cables or wires.
          </h3>
          <div className='steps'>
            <h2>So, these are the steps we're going to follow to complete this project :</h2>
            <ol>

              <ol>
                <h3 className='keyword'>Transmitter:</h3>
                <h4><li><a href="#project-circuit-transmitter">Arduino Circuit Diagram</a></li></h4>
                <h4><li><a href="#soldering-electronics-transmitter">Soldering & Electronics</a></li></h4>
                <h4><li><a href="#project-code-transmitter">Arduino Code</a></li></h4>
              </ol>

              <br />

              <ol>
                <h3 className='keyword'>Receiver:</h3>
                <h4><li><a href="#project-circuit-receiver">Arduino Circuit Diagram</a></li></h4>
                <h4><li><a href="#soldering-electronics-receiver">Soldering & Electronics</a></li></h4>
                <h4><li><a href="#project-code-receiver">Arduino Code</a></li></h4>
              </ol>
              
            </ol>
          </div>
        
          <div id="project-circuit-transmitter" className='circuit'>
              <h1>Transmitter Circuit Diagram</h1>
              <h3>
                First of all, we need to create the electronic circuit for our transmitter.<br />
                It consists of an <span className='keyword'>Arduino Nano</span>, 2 joysticks, a NRF24L01 module and a 100uF capacitor.
              </h3>
              <div className='project-circuit'>
                <img src={ images.rc_transmitter } alt="arduino circuit" />
              </div>
          </div>

          
          <div id="soldering-electronics" className='parts-assembly'>
            <h1>Assembling The Transmitter</h1>
            <h3>
              Based on the diagram above, we can now assemble and solder all the different pieces of the radio transmitter.
            </h3>
            <div className='imgs-container'>
              <div>
                <img src={ images.rc__1 } alt="radio transmitter assembling" />
              </div>
              <div>
                <img src={ images.rc__3 } alt="radio transmitter assembling" />
              </div>
              <div>
                <img src={ images.rc__4 } alt="radio transmitter assembling" />
              </div>
            </div>
            <h3> 
              And Now, our radio transmitter is ready and we can repeat the same process with the receiver.
            </h3>
          </div>

          <div id="project-code" className='code'>
            <h1>Arduino Code</h1>
            <h3>
              <a  
                href='https://github.com/Choaib-ELMADI/Arduino' 
                target='_blank' 
                rel='noreferrer'
                style={{
                  textDecoration: 'none',
                  color: '#6b6767',
                }}
              >Check my Github account for more</a>.
            </h3>
            <div className='project-code'>
            <pre>
              {`
        /*

                Radio Transmitter Code
                by Choaib ELMADI   https://elmadichoaib.vercel.app

                give it a star :   github.com/Choaib-ELMADI
        
        */

        #include <SPI.h>
        #include "nRF24L01.h"
        #include "RF24.h"
        
        RF24 radio(7, 8);
        const byte address[6] = "ABCDE";
        
        typedef struct {
          int xL;
          int yL;
          int xR;
          int yR;
        } DATA;
        DATA data;
        
        int xLeft  = A0;
        int yLeft  = A1;
        int xRight = A2;
        int yRight = A3;
        
        void setup() {  
          radio.begin();
          radio.openWritingPipe(address);
          radio.setPALevel(RF24_PA_MIN);
          radio.stopListening();
        }
        
        void loop() {
          int xLeftValue  = analogRead(xLeft);
          int yLeftValue  = analogRead(yLeft);
          int xRightValue = analogRead(xRight);
          int yRightValue = analogRead(yRight);
        
          data.xL = xLeftValue;
          data.yL = yLeftValue;
          data.xR = xRightValue;
          data.yR = yRightValue;
        
          radio.write(&data, sizeof(DATA));
        }
        
        `}
              </pre>
            </div>
          </div>
  
          {/*
          <div className='conclusing'>
            <h1>And Now, our project is completed</h1>
            <h3>
              I hope you liked this project and learned something new. 
              Feel free to ask any question and check my Arduino Projects Collection.
            </h3>
            <img src={ images.arduino_solar_light } alt="solar light tracker" />
            <div className='prev-next'>
              <h3>
                <Link className='project-link' to="/projects/selling-machine">
                  <span>Previous Project</span>
                  <span>Selling Machine</span>
                </Link>
              </h3>
              <h3>
                <Link className='project-link' to="/projects/drone">
                  <span>Next Project</span>
                  <span>DIY Drone</span>
                </Link>
              </h3>
            </div>
            <div className='support'>
              <h2>Thanks For Supporting Us</h2>
              <div className='icons'>
                {
                  support.map((s, i) => (
                    <a 
                      href={ s.link } 
                      key={ s.name }
                      target='_blank'
                      rel='noreferrer'
                    >
                      { s.icon }
                    </a>
                  ))
                }
              </div>
            </div>
          </div> */}
        </div>
        <div className='app__project-ads'>
          <h1>Ads</h1>
        </div>
      </div>
    </div>
  );
};

export default RadioControl;