import React from 'react';
import { useSelector } from 'react-redux';

function Reviews({ review }) {
    const spot = useSelector(state => state.spots.spot);

    if(!spot){
        return null
    }

    return (
        <div className='review-container'>
            <div>{review.User.firstname} {review.User.lastName}</div>
            <div>{review.body}</div>
            <div>{review.createdAt}</div>
        </div>
    );
}

export default Reviews;