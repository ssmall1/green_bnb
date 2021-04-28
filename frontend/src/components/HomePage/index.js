import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spots from '../Spots/index';
import * as spotReducer from '../../store/spot';
import './HomePage.css';

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
    
    let things = [];
    function listings(places) {
        for (let i = 0; i < 6; i++) {
            things.push(places[i]);
            
        }
    }
    listings(spots);

    return (
        <div className='home-wrapper'>
             <div className="path-div">
                <div className="home-message">
                    Browse from coast to coast and beyond...
                </div>
            </div>
            <div className="spots-wrapper">
                {things.map((spot) => {
                        return (
                            <div key={spot.id}>
                                <Spots spot={spot}/>
                            </div>
                            // <NavLink key={spot.id} to={`/spots/${spot.id}`}> {spot.title}</NavLink>
                        )
                    })}
            </div>
        </div>
    )
}

export default HomePage;