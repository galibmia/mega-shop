import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-container">
            <div className='shadow'>
                <form className="login-form">
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <button type="submit" className="login-button">Login</button>

                    <p>New to Mega-Shop? <Link to="/signup">Sign Up</Link></p>

                    <div className="separator">
                        <span>or</span>
                    </div>

                    <button type="button" className="google-login-button">
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;