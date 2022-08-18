import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const{img,name,comment,ratings}=props.data;
    return (
        <div className='review-detail'>
            <img src={img} alt="..." />
            <h3>{name}</h3>
            <h4>{comment}</h4>
            <p>{ratings}</p>
        </div>
    );
};

export default ReviewDetail;