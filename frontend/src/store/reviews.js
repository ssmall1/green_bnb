import { csrfFetch } from './csrf';

const LOAD = 'reviews/LOAD';
const ADD_ONE = 'reviews/ADD_ONE';

const load = reviews => ({
    type:LOAD,
    reviews
});

const addOneReview = review => ({
    type: ADD_ONE, 
    review
});

export const getReviews = (id) => async dispatch => { 
    const response = await csrfFetch(`/api/reviews/${id}`);

    if (response.ok) { 
        const reviews = await response.json();
        dispatch(load(reviews));
    };
}

export const createReviewForm = newReview => async dispatch => {
    const response = await csrfFetch('/api/reviews', { 
        method: 'POST',
        body: JSON.stringify(newReview)
    })

    if (response.ok) {
        const review = await response.json();
        dispatch(addOneReview(review));
        return review;
  };
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.reviews.forEach(review => {
            allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                 // ...state,
            };
        }
        case ADD_ONE: {
            const newState = {
            ...state,
            [action.review.id]: action.review
            };
             return newState;
        }
        default:
            return state;
  }
}

export default reviewReducer;