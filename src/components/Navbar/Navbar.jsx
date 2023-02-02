import React, { useState } from 'react';

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
                            <li key={ item }>
                                <a href={ `#${ item }` }>{ item }</a>
                            </li>
                        ))
                    }
                </ul>
                <button 
                    onClick={ () => setOpen(!open) }
                    className='toggle-navbar'
                >open</button>
                <button className='app__navbar-btn'>Let's Talk</button>
            </ul>
        </nav>
    );
};

export default Navbar;