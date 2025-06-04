import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;