import React from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Reviews.css';

const Reviews = () => {
    const data = [
        { id: 1,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'enamul', comment: 'awesome', ratings: '5*' },
        { id: 2,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'sadek', comment: 'nice', ratings: '4*' },
        { id: 3,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'sazid', comment: 'good', ratings: '3*' },
        { id: 4,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'shofiq', comment: 'good', ratings: '4*' },
        { id: 5,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'saila', comment: 'good', ratings: '3*' },
        { id: 6,img:"https://i.ibb.co/yWJ5gSt/baby.jpg", name: 'nitu', comment: 'good', ratings: '5*' },
    ]
    return (
        <div>
            <h2>Reviews :{data.length}</h2>
            <div className='review'>
                {
                    data.slice(0,3).map(data =><ReviewDetail
                        key={data.id}
                        data={data}
                        ></ReviewDetail>)
                        
                }
                        
            </div>
        </div>
    );
};

export default Reviews;