import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Testimonials.css';
import { images } from '../../constants/index';
import { testimonials } from '../../data';



const Testimonials = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='app__testimonials'>
            <div data-aos="fade-down" className='app__testimonials-intro'>
                <img src={ images.testimonials_intro } alt="testimonials" />
                <div className="app__testimonials-intro-info">
                    <small>TESTIMONIALS</small>
                    <h2>
                        What our
                        <br />
                        clients say
                    </h2>
                </div>
            </div>
            {
                testimonials.map((t, i) => (
                    <div data-aos="fade-down" className='app__testimonials-card' key={ i }>
                        <img src={ images.quote } alt="quote"/>
                        <h2>{ t.comment }</h2>
                        <p>{ t.details }</p>
                    </div>
                ))
            }
        </div>
  );
};

export default Testimonials;