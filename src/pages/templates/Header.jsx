import React from 'react';
import { NavLink } from 'react-router';
import "./Header.css"

const Header = () => {
    return (
        <header >
            <nav>
                <NavLink className='header-link' to="/">Home</NavLink>
                <NavLink className='header-link' to="/favorites">Favorite Products</NavLink>
            </nav>
        </header>
    );
}

export default Header;
