import React, { useContext, useState } from 'react';
import "./Login.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { setUser, signInWithPassword, signInWithGoogle, setError, loading } = useContext(AuthContext);

    const [show, setShow] = useState(false);

    // Navigate the route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    // Sign In with Email and Password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithPassword(email, password)
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message)
            })

    }

    // Sign In with Google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
    }


    // Spinner
    if (loading) {
        return <div className='loader-container' >
            <div className='loader'></div>
        </div>
    };

    return (
        <div className="login-container">
            <div className='shadow'>
                <form onSubmit={handleLogin} className="login-form">
                    <h2 className='header-text'>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type={show? "text" : "password"} id="password" name="password" required />
                    <span onClick={() => setShow(!show)}  className='togglespanassword'>
                        {
                            show? <span>Hide Password</span> 
                            :
                            <span>Show Password</span>
                        }
                    </span>

                    <button type="submit" className="login-button">Login</button>

                    <p>New to Mega-Shop? <Link to="/signup">Sign Up</Link></p>

                    <div className="separator">
                        <span>or</span>
                    </div>

                    <button onClick={handleSignInWithGoogle} type="button" className="google-login-button">
                        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;