const LOAD = 'spots/LOAD';

const load = spots => ({
    type: LOAD,
    spots,
});

export const getSpots = () => async dispatch => {
    const response = await fetch(`/api/spots`);

    if (response.ok) {
        const spots = await response.json();
        dispatch(load(spots));
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

        default: 
            return state;
    }
}

export default spotsReducer;