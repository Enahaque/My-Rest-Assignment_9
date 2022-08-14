import React from 'react';
import './Header.css';
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='nav-section'>
            
            <Link to="/">Home</Link>{" "}
            <Link to="/reviews">Reviews</Link>{" "}
            <Link to="/dashboard">Dashboard</Link>{" "}
            <Link to="/blogs">Blogs</Link>{" "}
            <Link to="/about">About</Link>

        </nav>
    );
};

export default Header;