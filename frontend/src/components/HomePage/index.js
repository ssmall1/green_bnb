import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spots from '../Spots/index';
import * as spotReducer from '../../store/spot';
import './HomePage.css';

function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots);
    console.log(spots)

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    if (!spots) {
        return null;
    };
    
    let things = [];
    if (spots, "these spots") {

        function listings(places) {
            let i = 0;
            for (let key in places) {
                if (i === 6) return;
                things.push(places[key]);
                i++;
            }
            // for (let i = 0; i < 6; i++) {
            //     things.push(places[i]);
                
            // }
        }
        listings(spots);
        console.log(things, "these things")
    }
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
                        )
                    })}
            </div>
        </div>
    )
}

export default HomePage;