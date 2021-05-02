import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Review.css';

function Reviews({ review, setUpdateReviews }) {
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id));
        setUpdateReviews('deleted');
    }

    let score = review.rating;
    let scoreArr = [];
    for (let i = 0; i < score; i++) {
        scoreArr.push("s")
    }

    return (
        <div className='review-container'>
            <div className=''>{review.User.firstName} {review.User.lastName}</div> 
            { review.authorId === userId ? 
                <button type='submit' onClick={handleSubmit}>Delete Review</button>
                : <></> }
            <div>{scoreArr.map((star) => {
                return (
                    <span key={review.id + Math.random()} className="star">
                        ⭐
                    </span>
        )
      })}</div>
            <div>{review.body}</div>
        </div>
    );
}

export default Reviews;