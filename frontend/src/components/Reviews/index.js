import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Review.css';

function Reviews({ review }) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id))
        setUpdate('deleted')
    }

    let score = review.rating;
    let scoreArr = [];
    for (let i = 0; i < score; i++) {
        scoreArr.push("s")
    }

    return (
        <div className='review-container'>
            <div className=''>{review.User.firstName} {review.User.lastName}</div> <span><button type='submit' onClick={handleSubmit}>Delete Review</button></span>
            <div>{scoreArr.map((star) => {
                return (
                    <span key={score.rating} className="star">
                        ⭐
                    </span>
        )
      })}</div>
            <div>{review.body}</div>
        </div>
    );
}

export default Reviews;