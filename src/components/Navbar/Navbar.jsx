import React, { useState } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';
import { FaWindowClose } from 'react-icons/fa';

import './Navbar.css';
const main = ['Services', 'Work', 'About', 'Pricing', 'Pages', 'Cart'];



const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-menu'>
                <a 
                    href='/' 
                    className='app__logo'
                >leevi</a>
                <ul className={ open ? 'app__navbar-main active' : 'app__navbar-main' }>
                    {
                        main.map(item => (
                            <li 
                                key={ item }
                                onClick={ () => setOpen(false) }
                            >
                                <a href={ `#${ item }` }>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
                <button 
                    onClick={ () => setOpen(!open) }
                    className='toggle-navbar'
                >
                    {
                        !open ? <MdOutlineMenuOpen fontSize={ 30 } /> : <FaWindowClose fontSize={ 30 } />
                    }
                </button>
                <button className='app__navbar-btn'>Let's Talk</button>
            </ul>
        </nav>
    );
};

export default Navbar;