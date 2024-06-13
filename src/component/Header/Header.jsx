import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.png';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    
    const {user, logOut, setUser} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        setUser(null)
    }
    
    return (
        <div className='header'>
            <img src={logo} alt="Logo" />
            <div className='nav-links'>
                <ActiveLink to="/">Shop</ActiveLink>
                <ActiveLink to="/orders">Orders</ActiveLink>
                <ActiveLink to="/inventory">Inventory</ActiveLink>
                <ActiveLink to="/login">Login</ActiveLink>
                <ActiveLink to="/signup">Sign Up</ActiveLink>
                {
                    user && <span className='user'><ActiveLink to='/profile'>{user.email}</ActiveLink><button onClick={handleLogOut}>Log Out</button></span>
                }
            </div>
        </div>
    );
};

export default Header;
