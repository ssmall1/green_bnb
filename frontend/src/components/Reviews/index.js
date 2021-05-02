import React from 'react';
import './Review.css';

function Reviews({ review }) {
    let score = review.rating;
    
    let scoreArr = [];

    for (let i = 0; i < score; i++) {
        scoreArr.push("⭐")
    }

    console.log(scoreArr)
    return (
        <div className='review-container'>
            <div className=''>{review.User.firstName} {review.User.lastName}</div>
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