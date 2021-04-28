const LOAD = 'spots/LOAD';
const LOAD_ONE = 'spots/LOAD_ONE';

const load = spots => ({
    type: LOAD,
    spots,
});

const loadOneSpot = spot => ({
    type: LOAD_ONE,
    spot,
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


const initialState = { spots: {} };

const spotsReducer = (state = initialState, action) => {
    // let newState;
    switch (action.type) {
        case LOAD: {
            const allSpots = [];
            action.spots.forEach(spot => {
                allSpots.push(spot);
            });
            return {
                ...action.spots,
                ...state,
                allSpots
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

        default: 
            return state;
    }
}

export default spotsReducer;