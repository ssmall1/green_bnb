import { csrfFetch } from './csrf';

const LOAD = 'spots/LOAD';
const LOAD_ONE = 'spots/LOAD_ONE';
const GET_REVIEWS = 'spot/GET_REVIEWS';
const POST_REVIEW = 'spot/POST_REVIEW';
const POST_BOOKING = 'spot/POST_BOOKING';

const load = spots => ({
    type: LOAD,
    spots,
});

const loadOneSpot = spot => ({
    type: LOAD_ONE,
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

const sendBooking = booking => ({
    type: POST_BOOKING,
    booking
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

export const getReviews = (id) => async dispatch => {
  const response = await fetch(`/api/spots/${id}/reviews`);

  if(response.ok) {
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

  if(response.ok) {
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

// const initialState = { spots: [] };

const spotsReducer = (state = {}, action) => {
    let bookingState;
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
            if (!state[action.spot.id]) {
              const newState = {
                ...state,
                [action.spot.id]: action.spot
              };
              const spotList = newState.spots.map(id => newState[id]);
              spotList.push(action.spot);
              return newState;
            }
            return {
              ...state,
              [action.spot.id]: {
                ...state[action.spot.id],
                ...action.spot,
              }
            };
          }
        case GET_REVIEWS: {
            const reviews = action.reviews
            return {
                ...state,
                reviews
            }
          }
        case POST_REVIEW: {
            let reviewState = {}
            reviewState = { ...state }
            reviewState.reviews = [...state.reviews, action.review]
            return reviewState
        }
        case POST_BOOKING: {
            return bookingState = { ...state }
        }
        default: 
            return state;
    }
}

export default spotsReducer;