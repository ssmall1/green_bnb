const LOAD = 'spots/LOAD';
const LOAD_ONE = 'spots/LOAD_ONE';
const GET_REVIEWS = 'spot/GET_REVIEWS';
const POST_REVIEW = 'spot/POST_REVIEW';

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
        dispatch(loadOneSpot(spot));
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

const initialState = { spots: [] };

const spotsReducer = (state = initialState, action) => {
    // let newState;
    switch (action.type) {
        case LOAD: {
            let newState = {};
            action.spots.forEach(spot => {
              newState[spot.id] = spot;
            });
            // const allSpots = [];
            // action.spots.forEach(spot => {
            //     allSpots.push(spot);
            // });
            return {
                // ...action.spots,
                ...state,
                // allSpots
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
            newState = { ...state }
            newState.reviews = [...state.reviews, action.review]
            return newState
        }
        default: 
            return state;
    }
}

export default spotsReducer;