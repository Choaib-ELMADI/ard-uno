import React, { useState, useEffect } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

import './Navbar.css';
const main = ['Services', 'Work', 'About', 'Pricing', 'Pages'];



const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [back, setBack] = useState(false);

    const scrolling = () => {
        if (window.scrollY >= 30) {
            setBack(true);
        }
        else {
            setBack(false);
        }
    }

    useEffect(() => {
        scrolling();
        window.addEventListener("scroll", scrolling);
      })

    window.onscroll = { scrolling }

    return (
        <nav className={ back ? 'app__navbar active' : 'app__navbar' }>
            <ul className='app__navbar-menu'>
                <a 
                    href='/' 
                    className='app__logo'
                >
                    <h1>Ard-uno</h1>
                </a>
                <div className={ open ? 'app__navbar-container active' : 'app__navbar-container' }>
                    <ul className='app__navbar-main active'>
                        {
                            main.map(item => (
                                <li 
                                    key={ item }
                                    onClick={ () => setOpen(false) }
                                >
                                    <a href={ `#${ item }` }><h4>{ item }</h4></a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <button className='app__navbar-btn'>Let's Talk</button>
                <button 
                    onClick={ () => setOpen(!open) }
                    className='toggle-navbar'
                >
                    {
                        !open ? <MdOutlineMenuOpen fontSize={ 32 } /> : <IoClose fontSize={ 32 } />
                    }
                </button>
            </ul>
        </nav>
    );
};

export default Navbar;