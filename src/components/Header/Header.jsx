import React from 'react';

import './Header.css';
import { images } from '../../constants/index';
import { sponsors } from '../../data';



const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-top'>
        <h1>Lorem ipsum <br/>consectetur.</h1>
        <p>
          Lorem, ipsum dolor sit amet adipisicing elit. 
          Lorem ipsum dolor sit. 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="app__header-bottom">
        <div className="app__header-pic">
          <img src={ images.banner } alt="banner" />
        </div>
        <div className="app__header-last">
          <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small>
        </div>
        <div className="app__header-spons">
          {
            sponsors.map((s, i) => (
              <a 
                key={ i }
                href={ s.link }
                target='_blank'
              >
                <img src={ s.img } alt={ s.name } />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Header;