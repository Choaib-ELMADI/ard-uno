import React from 'react';
import { Link } from 'react-router-dom';
import { BiCoffeeTogo } from 'react-icons/bi';
import { FaPatreon } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

import './Project.css';
import { images } from '../../constants/index';
import { parts_3d, model_3d } from '../../data';

const support = [
  {
    name: "Bye Me Coffe",
    icon: <BiCoffeeTogo className='icon' fill='white' />,
    link: "https://www.buymeacoffee.com/choaib.elmadi",
  },
  {
    name: "Patreon",
    icon: <FaPatreon className='icon' fill='black' />,
    link: "https://www.patreon.com/user?u=81408575",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram className='icon' fill='white' />,
    link: "https://www.instagram.com/choaib_elmadi",
  },
]



const RadioControl = () => {
  return (
    <div className='app__project-main rc'>
      <div style={{ textAlign: 'center' }} className='app__project-header'>
          <h1>DIY Arduino Radio Controller</h1>
          <div className='app__project-header-creator'>
            <img src={ images.profile } alt="Choaib ELMADI" />
            <h4>By <a href="https://choaib-elmadi.netlify.app/" target="_blank" rel="noreferrer">Choaib ELMADI</a></h4>
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
              <h3><li><a href="#project-circuit">Arduino Circuit Diagram</a></li></h3>
              <h3><li><a href="#soldering-electronics">Soldering & Electronics</a></li></h3>
              <h3><li><a href="#project-code">Arduino Code</a></li></h3>
            </ol>
          </div>

          <div id="project-circuit" className='circuit'>
              <h1>Arduino Solar Panel Circuit Diagram</h1>
              <h3>
                The next stage is connecting the electronics. 
                The circuit diagram of this project is actually quite simple. 
                We just need an Arduino board and a Servo motor to move the panel. 
                And two Photoresistor.
              </h3>
              <div className='project-circuit'>
                <img src={ images.solar_panel_circuit } alt="arduino circuit" />
              </div>
              <h3>
                And because the servo motor needs 5V, 
                and the arduino can't handle this we must 
                provide an external power source. 
                In our case, it's OK because we only have one servo. <br />
                Once we connected eveything, we can move on to programming the arduino.
              </h3>
          </div>

          <div id="soldering-electronics" className='parts-assembly'>
            <h1>Assembling the Solar Light Tracker</h1>
            <h3>
              Now, we are ready to assemble the solar panel. 
              I started with assembling the parts of the base
              using some hot glue. Then I attached the 
              main servo motor using the screws included in 
              its package and some hot glue.
            </h3>
            <div className='imgs-container'>
              <div>
                <img src={ images.solar_panel_holders_done } alt="solar panel assembling" />
              </div>
              <div>
                <img src={ images.solar_panel_servo_mounted } alt="solar panel assembling" />
              </div>
            </div>
            <h3> 
              Then on the output shaft of the servo I secured the ldrs holder.
            </h3>
            <div className='imgs-container'>
              <div>
                <img src={ images.solar_panel_ldrs } alt="solar panel assembling" />
              </div>
              <div>
                <img src={ images.solar_panel_1 } alt="solar panel assembling" />
              </div>
            </div>
            <h3> 
              And Now, our solar light detector is fully assembled and ready.
            </h3>
          </div>

          <div id="project-code" className='code'>
            <h1>Arduino Code</h1>
            <h3>
              The main code is quite simple. First, we need 
              to include the Servo library, create our LDR 
              pins and the interval of error. We attach the servo 
              to its pin and start reading the values of the two LDRs. 
              Based on the difference between these two, we tell the servo where to rotate. <br /> <br />
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

                Solar Light Tracker Code
                by Choaib ELMADI   https://choaib-elmadi.netlify.app

                give it a star :   github.com/Choaib-ELMADI
        
        */

        #include <Servo.h>
        Servo panelServo;
        int ServoPin = 10;

        int LDRPin_1 = A1;
        int LDRPin_2 = A2;

        int errorBegin = -10;
        int errorEnd = 10;


        void setup() {
            Serial.begin(9600);

            panelServo.attach(ServoPin);
            panelServo.write(100);
                
            pinMode(LDRPin_1, INPUT);
            pinMode(LDRPin_2, INPUT);

            delay(1000);
        }

        void loop() {
            int LDRValue_1 = analogRead(LDRPin_1);                                                                                                                     
            int LDRValue_2 = analogRead(LDRPin_2);
            int Diff = LDRValue_1 - LDRValue_2;
            int angle;

            if (Diff <= errorBegin) {
              angle = map(abs(Diff), abs(errorBegin), 900, 100, 180);
              panelServo.write(angle);
            }   else if (Diff >= errorEnd) {
              angle = map(Diff, errorEnd, 900, 100, 20);
              panelServo.write(angle);
            else {
              angle = 100;
              panelServo.write(angle);
            }
        }
              `}
              </pre>
            </div>
          </div>
          
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
          </div>
        </div>
        <div className='app__project-ads'>
          <h1>Ads</h1>
        </div>
      </div>
    </div>
  );
};

export default RadioControl;