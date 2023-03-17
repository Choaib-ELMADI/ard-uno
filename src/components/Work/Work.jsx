import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Work.css';
import { works } from '../../data';
import { images } from '../../constants';



const Work = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 600px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        }

        mediaQuery.addEventListener('change', handleMediaChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    return (
        <div id='Work' className='app__work'>
            {
                works.map((work, i) => (
                (i === 0) ?
                    <div className='app__works-work' key={ i }>
                        <img src={ isMobile ? images.arduino_solar_light_small : work.img } alt={ `work-${ i }` } />
                        <div className="app__work-info">
                            <h1>{ work.title }</h1>
                            <p>{ work.desc }</p>
                        </div>
                        <Link to={ `/projects/${ work.link }`} className="app__work-link"><b>View Project</b></Link>
                    </div>
                :
                    <div className='app__works-work' key={ i }>
                        <img src={ work.img } alt={ `work-${ i }` } />
                        <div className="app__work-info">
                            <h1>{ work.title }</h1>
                            <p>{ work.desc }</p>
                        </div>
                        <Link to={ `/projects/${ work.link }`} className="app__work-link"><b>View Project</b></Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Work;