import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spots from '../Spots/index';
import * as spotReducer from '../../store/spot';
import Search from '../Search';
import GoogleApiWrapper from '../Map';
import './HomePage.css';


function HomePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const spots = useSelector(state => state.spots);
    
    const [searchTerm, setSearchTerm] = useState('');
    const [map, setMap] = useState(false);

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch, map]);

    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    if (!spots) {
        return null;
    };
    
    let things = [];
    if (spots) {

        function listings(places) {
            let i = 0;
            for (let key in places) {
                if (i === 6) return;
                things.push(places[key]);
                i++;
            }
        }
        listings(spots);
    }

    console.log(map, "MAPSTATE")
    return (
        <div className='home-wrapper'>
            <div className="path-wrapper">
                <div className="home-message">
                    Browse from coast to coast and beyond...
                </div>
                <div className="search-comp">
                    <span id="map-button" 
                    onClick={() => map ? setMap(false) : setMap(true)}
                    >Show Map</span>
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <span id="spot-button"><a href="#home-spots">Featured Spots</a></span>
                </div>
            </div>
            { map ?
            <div className="map-wrapper">
                <GoogleApiWrapper />
            </div>
            : <></>
            }
            <div className="spots-wrapper" id="home-spots">
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