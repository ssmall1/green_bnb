import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Review.css';

function Reviews({ review }) {
    const userId = useSelector(state => state.session.user.id);
    const dispatch = useDispatch();

    const [editedReviewContent, setEditedReviewContent] = useState("");
    const [openEditReview, setOpenEditReview] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(spotReducer.deleteReview(review.id));
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
        setOpenEditReview(false);
        setEditedReviewContent("");
        // await dispatch(spotReducer.getReviews(spotId)); // USING THIS AS COPOUT WHEN I SHOULD UPDATE STATE
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
            {openEditReview === review.id ? 
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
                        <i class="fa fa-close" id="modify-review" onClick={() => setOpenEditReview(false)}></i>
                        <i class="fas fa-share-square" id="modify-review" disabled={editedReviewContent === ""} onClick={(e) => handleEditReview(e, review)}></i>
                    </div>
                </form>
                : 
                <div>{review.body}</div>
            }
            { review.authorId === userId & openEditReview === false ?
                <>
                    <i class="fas fa-edit" id="modify-review" onClick={() => setOpenEditReview(review.id)}></i>
                    <i id='modify-review' onClick={handleSubmit} class="fa fa-trash-o"></i>
                </>
                : <></> }
        </div>
    );
}

export default Reviews;