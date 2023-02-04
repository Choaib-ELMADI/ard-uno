import React from 'react';

import './About.css';
import { awards } from '../../data';



const About = () => {
  return (
    <div id='About' className='app__about'>
        <div className="app__about-right">
            <small><b>Why Ard-Uno</b></small>
        </div>
        <div className="app__about-left">
            <h2>
                We create stunning digital 
                <br/>
                experiences that people will love.
                <br/>
                On all platforms.
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Dolor accusamus vero, 
                doloremque quasi odio laudantium.
                Culpa voluptates optio modi quas.
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Dolor accusamus vero, 
                doloremque quasi odio laudantium.
                Culpa voluptates optio modi quas.
            </p>
            <div className="app__about-awards">
                {
                    awards.map((award, i) => (
                        <div className='app__awards-item' key={ i }>
                            <h4>{ award.title }</h4>
                            <h5>{ award.year }</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default About;