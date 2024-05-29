import React from 'react'
import './Header.css'
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;