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
            <h2 style={{marginBottom: '.75rem'}}>
                We create stunning digital 
                <br/>
                experiences that people will love.
                <br/>
                On all platforms.
            </h2>
            <p>
                <b>Our Arduino projects</b> are designed to 
                inspire and educate, providing you with 
                a fun and rewarding way to learn electronics 
                and programming.
            </p>
            <p>
                <b>With our collection</b> of Arduino projects, 
                you'll be able to build everything from simple 
                circuits to complex robots, all while honing 
                your skills and unleashing your creativity.
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