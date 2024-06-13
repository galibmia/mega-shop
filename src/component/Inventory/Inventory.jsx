import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Inventory = () => {
    const {loading} = useContext(AuthContext)
    
    if(loading){
        return <div className='loader-container' >
            <div className='loader'></div>
        </div>
    };
};

export default Inventory;