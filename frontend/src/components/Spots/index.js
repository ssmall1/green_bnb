import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './Spots.css';

function Spots({ spot }) {
    const sessionUser = useSelector(state => state.session.user);
    // console.log(spot.spot);
    // spot = spot.spot
    
    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    return (
        <div className="spot-container">
            <h2 value={spot.id}>{spot.title}</h2>
            <NavLink key={spot.id} to={`/spots/${spot.id}`}> 
                <img src={spot.imageUrl} alt={spot.title}/>
            </NavLink>
            <div className="location">{spot.city}, {spot.state}</div>
            <div className="price">${spot.price} / night</div>
        </div>
    )
}

export default Spots;