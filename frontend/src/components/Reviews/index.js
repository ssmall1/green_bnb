import React from 'react';
import { useSelector } from 'react-redux';

function Reviews({ review }) {
    // const spots = useSelector(state => state.spots);
    // console.log(spot)
    // console.log("here")
    // if(!spots){
    //     return null
    // }

    // console.log(review, "review")
    return (
        <div className='review-container'>
            <div>{review.User.firstname} {review.User.lastName}</div>
            <div>{review.body}</div>
            <div>{review.createdAt}</div>
        </div>
    );
}

export default Reviews;