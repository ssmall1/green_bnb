import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Review.css';

function Reviews({ review, setUpdateReviews }) {
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const [editedReviewContent, setEditedReviewContent] = useState("");
    const [editReview, setEditReview] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id));
        setUpdateReviews(Math.random());
    }

    async function handleEditReview(e, review){
        e.preventDefault();
        const body = editedReviewContent;
        const id = review.id;
        const authorId = review.authorId;
        const spotId = review.spotId;
        const rating = review.rating;
        if (body === "") {
            return null
        }
        const payload = {
            id,
            authorId,
            spotId,
            rating,
            body,
        }
        await dispatch(spotReducer.editReview(payload));
        setEditReview(false);
        setEditedReviewContent("");
        await dispatch(spotReducer.getReviews(spotId)); // USING THIS AS COPOUT WHEN I SHOULD UPDATE STATE
    }

    let score = review.rating;
    let scoreArr = [];
    for (let i = 0; i < score; i++) {
        scoreArr.push("s")
    }

    // TODO
    // Figure out why need to getReviews and editReview state not updating...
    // change edit review form to include selector to change rating
    
    return (
        <div className='review-container'>
            <div className=''>{review.User.firstName} {review.User.lastName}</div> 
            <div>{scoreArr.map((star) => {
                return (
                    <span key={review.id + Math.random()} className="star">
                        ⭐
                    </span>
        )
    })}</div>
            {editReview === review.id ? 
                <form id="edit-review-form">
                    <input
                        id="review-input"
                        type="textbox"
                        name="comment"
                        onChange={e => setEditedReviewContent(e.target.value)}
                        value={editedReviewContent}
                        placeholder={review.content}
                        required
                    >
                    </input>
                    <div className="edit-review-container">
                        <button id="delete-review" onClick={() => setEditReview(false)}>Cancel</button>
                        <button id="delete-review" disabled={editedReviewContent === ""} onClick={(e) => handleEditReview(e, review)}>Save</button>
                    </div>
                </form>
                : 
                <div>{review.body}</div>
            }
            { review.authorId === userId & editReview === false ?
                <>
                    <button id="delete-review" onClick={() => setEditReview(review.id)}>Edit</button>
                    <button id='delete-review' type='submit' onClick={handleSubmit}>Delete</button>
                </>
                : <></> }
        </div>
    );
}

export default Reviews;