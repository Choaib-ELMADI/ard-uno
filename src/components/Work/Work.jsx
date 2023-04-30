import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

import './Work.css';
import { works } from '../../data';



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
                    <div 
                        key={ i }
                        className='app__works-work' 
                        style={{ background: work.back }}
                    >
                        <img src={ isMobile ? work.smallImg : work.img } alt={ `work-${ i }` } draggable={ false } />
                        <h2>{ work.title }</h2>
                        <Link to={ `/projects/${ work.link }`} className="app__work-link">
                            <FaEye size={ 24 } />
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Work;