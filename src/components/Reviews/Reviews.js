import React from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Reviews.css';

const Reviews = () => {
    const data = [
        { id: 1,img:"https://i.ibb.co/wBr8mSq/6-1.jpg", name: 'Etu', comment: 'awesome', ratings: '5*' },
        { id: 2,img:"https://i.ibb.co/v41fSdx/1-1.jpg", name: 'Titu', comment: 'nice', ratings: '4*' },
        { id: 3,img:"https://i.ibb.co/D8y78XF/2-1.jpg", name: 'Setu', comment: 'well', ratings: '3*' },
        { id: 4,img:"https://i.ibb.co/1Lp7DKq/3-1.jpg", name: 'Mitu', comment: 'good', ratings: '4*' },
        { id: 5,img:"https://i.ibb.co/W6WfrVN/4-1.jpg", name: 'Saila', comment: 'good', ratings: '3*' },
        { id: 6,img:"https://i.ibb.co/4PLdRyt/5-1.jpg", name: 'Nitu', comment: 'supper', ratings: '5*' }
        
    ];
    return (
        <div>
            <div className='review'>
                {
                    data.map(data =><ReviewDetail
                        key={data.id}
                        data={data}
                    ></ReviewDetail>)
                }
                        
            </div>
        </div>
    );
};

export default Reviews;
           