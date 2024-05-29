import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';


const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            

        </div>
    );
};

export default Home;