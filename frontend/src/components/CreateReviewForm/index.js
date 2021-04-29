import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReviewForm } from '../../store/reviews';
import './CreateReviewForm.css';

const CreateReviewForm = ({user, listing}) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newReview = {
            review,
            guest_id: user.id,
            listing_id: parseInt(listing)
        };  

        let createdReview = await dispatch(createReviewForm(newReview));
        setReview("");
    };

    return (
        <section className="review-form-wrapper">
            <form className="review-form" onSubmit={handleSubmit}>
                <textarea
                    className="review-input"
                    type="text"
                    placeholder="Leave a review!"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}/>
                
                <button type="submit" id="submit-review">Submit</button>
            </form>
        </section>
    );
};

export default CreateReviewForm;
