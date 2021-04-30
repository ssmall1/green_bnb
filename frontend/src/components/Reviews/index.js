import React from 'react';

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
            <div className=''>{review.User.firstName} {review.User.lastName}</div>
            <div>{review.body}</div>
        </div>
    );
}

export default Reviews;