import { csrfFetch } from './csrf';

const LOAD = 'spots/LOAD';
const LOAD_ONE = 'spots/LOAD_ONE';
const SET_SPOT = 'spots/SET_SPOT';
const GET_REVIEWS = 'spot/GET_REVIEWS';
const POST_REVIEW = 'spot/POST_REVIEW';
const POST_BOOKING = 'spot/POST_BOOKING';
const SEARCH_SPOTS = 'spots/SEARCH_SPOTS';
const DELETE_REVIEW = 'spots/DELETE_REVIEW';
const EDIT_REVIEW = 'spots/EDIT_REVIEW';


const load = spots => ({
    type: LOAD,
    spots,
});

const loadOneSpot = spot => ({
    type: LOAD_ONE,
    spot,
});

const postSpot = spot => ({
    type: SET_SPOT,
    spot,
});

const loadReviews = reviews => ({
    type: GET_REVIEWS,
    reviews
});

const sendReview = review => ({
    type: POST_REVIEW,
    review
});

const setDeletedReview = review => ({
    type: DELETE_REVIEW,
    review
});

const setEditedReview = review => ({
    type: EDIT_REVIEW,
    review
})

const sendBooking = booking => ({
    type: POST_BOOKING,
    booking
});

export const searchSpots = () => ({
      type: SEARCH_SPOTS,
});

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
    }
};

export const getOneSpot = (spotId) => async dispatch => {
    const response = await fetch(`/api/spots/${spotId}`);
    
    if (response.ok) {
        let spot = await response.json();
        if (spot === null) {
          return null
        } else {
        dispatch(loadOneSpot(spot));
        }
    }
};

export const createSpot = (spot) => async (dispatch) => {
    const { title, price, ecoFeatures, description, image, address, city, state, zip, country, ownerId } = spot;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("ecoFeatures", ecoFeatures);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zip", zip);
    formData.append("country", country);
    formData.append("ownerId", ownerId);
    
    // for multiple files
    // if (images && images.length !== 0) {
    //   for (var i = 0; i < images.length; i++) {
    //     formData.append("images", images[i]);
    //   }
    // }
  
    // for single file
    if (image) formData.append("image", image);
  
    const res = await csrfFetch(`/api/spots`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  
    const data = await res.json();
    dispatch(postSpot(data));
    return data;
};

export const getReviews = (id) => async dispatch => {
  const response = await fetch(`/api/spots/${id}/reviews`);

  if (response.ok) {
      const reviews = await response.json();
      dispatch(loadReviews(reviews));
  }
}

export const postReview = (review) => async dispatch => {
  const response = await csrfFetch(`/api/spots/${review.id}/post/review`, {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      const review = await response.json();
      dispatch(sendReview(review));
      return review;
  }
};

export const postBooking = (booking) => async dispatch => {
  const response = await csrfFetch(`/api/spots/book`, {
      method: 'POST',
      body: JSON.stringify(booking),
      headers: {
          'Content-Type': 'application/json'
      }
  });

  if (response.ok) {
      const booked = await response.json();
      dispatch(sendBooking(booked));
      return booked;
  }
};

export const deleteReview = (id) => async dispatch => {
    const response = await csrfFetch(`/api/spots/review/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(setDeletedReview(id));
    }
}

export const editReview = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/spots/review/${payload.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
        dispatch(setEditedReview(payload));
    }
}

const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD: {
            let newState = {};
            action.spots.forEach(spot => {
              newState[spot.id] = spot;
            });
            return {
                ...state,
                ...newState
            };
        }
        case LOAD_ONE: {
            const spotState = { ...state };
            spotState.currentSpot = action.spot;
            return spotState;
        }
        case SET_SPOT: {
            let spotState = {};
            spotState = { ...state };
            spotState[action.spot.id] = action.spot;
            return spotState;
        }
        case GET_REVIEWS: {
            const reviews = action.reviews;
            return {
                ...state,
                reviews
            }
        }
        case POST_REVIEW: {
            let reviewState = {};
            reviewState = { ...state };
            reviewState.reviews = [action.review, ...state.reviews];
            return reviewState;
        }
        case POST_BOOKING: {
            let bookingState = {};
            return bookingState = { ...state };
        }
        case SEARCH_SPOTS: {
            let searchState = {};
            searchState = { ...state };
            return searchState;
        }
        case DELETE_REVIEW:
            let deleteReviewState = {};
            deleteReviewState = { ...state };
            const newReviews = deleteReviewState.reviews.filter(review => review.id !== action.review);
            deleteReviewState.reviews = [...newReviews];
            return deleteReviewState;
        case EDIT_REVIEW:
            let reviewState = {};
            reviewState = { ...state };
            for (let i = 0; i < reviewState.reviews.length; i++) {
                if (reviewState.reviews[i].id === action.review.id) {
                    reviewState.reviews[i] = action.review;
                }
            }
            return reviewState;
        default: 
            return state;
    }
}

export default spotsReducer;