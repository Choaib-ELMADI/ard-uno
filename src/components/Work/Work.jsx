import React from 'react';
import { Link } from 'react-router-dom';

import './Work.css';
import { works } from '../../data';



const Work = () => {
  return (
    <div id='Work' className='app__work'>
        {
            works.map((work, i) => (
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
        <div className='app__work-last'><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></div>
    </div>
  );
};

export default Work;