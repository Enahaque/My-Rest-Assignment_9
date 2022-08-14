import React from 'react';
import './Home.css';


const Home = () => {
    
    return (
        <div>

            <div className='container'>
                <div className='text-container'>
                    <h1>Your Next Laptop</h1>
                    <h1>Your First Choose</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore ratione pariatur consequuntur non. Hic doloremque distinctio ex deleniti, voluptatum officia quae veniam ea expedita fugiat pariatur perferendis, eum consequatur similique.</p>
                    <button className='btn'>First Choose</button>
                </div>

                <div className='image-container'>
                    <img src="https://i.ibb.co/6m0bzxt/laptop.png" alt="" />
                </div>
            </div>

            <br />

            <div className='customer-review'>
                
                <button className='review-btn'>Customer Reviews</button>

            </div>

        </div>
    );
};

export default Home;