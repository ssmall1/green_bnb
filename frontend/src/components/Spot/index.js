import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
import * as spotReducer from '../../store/spot';
import './Spot.css';

function Spot() { 
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spots[id]);

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(spotReducer.getOneSpot(id));
    }, [id, dispatch]);

    useEffect(() => {
        dispatch(spotReducer.getSpots());
    }, [dispatch]);

    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    if (!spot) {
        return null;
    };

    return(
        <>
            <div className="spot-container">
                <div>{spot.title}</div>
                <div id="spot-address">{spot.address}</div>
                <div className="spot-image">
                    <img src={spot.imageUrl} alt="spot"></img>
                </div>
                <div className="price">
                      ${spot.price} / night
                </div>
                <div className="spot-description">
                    {spot.description}
                </div>
            </div>
        </>
    )
}

export default Spot;