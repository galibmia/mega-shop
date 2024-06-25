import React, { useContext } from 'react';
import "./PrivateRouter.css"
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    
    const location = useLocation();
    
    if(loading){
        return <div className='loader-container' >
            <div className='loader'></div>
        </div>
    }
    
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;