import React, { useState } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

import './Navbar.css';
const main = ['Services', 'Work', 'About', 'Pricing', 'Pages'];



const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-menu'>
                <a 
                    href='/' 
                    className='app__logo'
                >
                    <h1>Arduno</h1>
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