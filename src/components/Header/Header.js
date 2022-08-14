import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-section'>
            
            <a href="/">Home</a>{" "}
            <a href="/reviews">Reviews</a>{" "}
            <a href="/dashboard">Dashboard</a>{" "}
            <a href="/blogs">Blogs</a>{" "}
            <a href="/about">About</a>

        </nav>
    );
};

export default Header;