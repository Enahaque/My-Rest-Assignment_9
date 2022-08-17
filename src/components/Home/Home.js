import { useNavigate } from 'react-router';

import React from 'react';
import './Home.css';


const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div>

            <div className='container'>
                <div className='text-container'>
                    <h2>Your Next Laptop</h2>
                    <h2>Your First Choose</h2>
                    <p>
                    HP 14 Inch Laptop PC 14s-fq0014na, AMD Athlon 3020e, 4GB RAM, 128GB SSD, FHD, Radeon Graphics, Free Upgrade to Windows 11, Microsoft 365 Personal 12 Months Included – Black
                    </p>
                    <h5>Price : $599</h5>
                    <button className='btn'>First Choose</button>
                </div>

                <div className='image-container'>
                    <img src="https://i.ibb.co/6m0bzxt/laptop.png" alt="..." />
                </div>
            </div>

            <br />

            <div className='customer-review'>
                
                <button onClick={()=>navigate('/reviews')} className='review-btn'>Customer Reviews</button>

            </div>

        </div>
    );
};

export default Home;