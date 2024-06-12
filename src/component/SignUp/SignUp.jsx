import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-container">
            <form className="signup-form">
                <h2>Sign Up</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                <button type="submit" className="signup-button">Sign Up</button>

                <p>Already have an account? <Link to="/login">Login</Link></p>

                <div className="separator">
                    <span>or</span>
                </div>

                <button type="button" className="google-signup-button">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                    Continue with Google
                </button>
            </form>
        </div>

    );
};

export default SignUp;