import React from 'react';
import './ReviewDetail.css';

const ReviewDetail = (props) => {
    const{img,name,comment,ratings}=props.data;
    return (
        <div className='review-detail'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h2>{comment}</h2>
            <p>{ratings}</p>
        </div>
    );
};

export default ReviewDetail;