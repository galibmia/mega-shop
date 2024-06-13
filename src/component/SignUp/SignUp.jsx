import React, { useContext, useState } from 'react';
import "./SignUp.css";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {

    const { error, setError, createUser, setUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        setError('')
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Password not match!!');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be greater than 6');
            return;
        }

        // Create user 
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate("/");
                setLoading(true)
            })
            .catch(err => {
                setError(err.message);
            })

        // Reset the form
        form.reset();
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                navigate("/");
            })
            .catch(err => setError(err.message))
    }

    if(loading){
        return <div className='loader-container' >
            <div className='loader'></div>
        </div>
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">
                <h2>Sign Up</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirmPassword" required />
                {
                    error && <p className='danger'>* {error}</p>
                }

                <button type="submit" className="signup-button">Sign Up</button>

                <p>Already have an account? <Link to="/login">Login</Link></p>

                <div className="separator">
                    <span>or</span>
                </div>

                <button type="button" onClick={handleSignInWithGoogle} className="google-signup-button">
                    <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                    Continue with Google
                </button>
            </form>
        </div>

    );
};

export default SignUp;