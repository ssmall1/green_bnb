import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spots from '../Spots/index';
import * as spotReducer from '../../store/spot';

function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots.allSpots);

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    if (!spots) {
        return null
    };

    return (
        <div className='home_container'>
            {spots.map((spot) => {
                return (
                    <div key={spot.id}>
                        <Spots spot={spot}/>
                    </div>
                    // <NavLink key={spot.id} to={`/spots/${spot.id}`}> {spot.title}</NavLink>
                )
            })}
        </div>
    )
}

export default HomePage;