import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './Spots.css';

function Spots({ spot }) {
    const sessionUser = useSelector(state => state.session.user);
    
    if (!sessionUser) return (
        <Redirect to='/welcome' />
    );

    return (
        <NavLink key={spot.id} to={`/spots/${spot.id}`} className="spot-link"> 
            <div className="spot-container">
                <h2 value={spot.id}>{spot.title}</h2>
                    <img id="home-spot-img" src={spot.imageUrl} alt={spot.title}/>
                <div className="location">{spot.city}, {spot.state}</div>
                <div className="price">${spot.price} / night</div>
            </div>
        </NavLink>
    )
}

export default Spots;