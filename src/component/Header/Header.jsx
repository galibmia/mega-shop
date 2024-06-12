import React from 'react';
import './Header.css';
import logo from '../../images/Logo.png';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <div className='nav-links'>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Orders</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
                <ActiveLink to="/signup">Sign Up</ActiveLink>
            </div>
        </div>
    );
};

export default Header;
