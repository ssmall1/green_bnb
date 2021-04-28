import React from 'react';
import { Redirect } from 'react-router-dom';
import './Spots.css';

function Spots(spot) {
    // console.log(spot.spot);
    spot = spot.spot

    const handleClick = (e) => {
        // const spotId = e.target.attributes.value;
        return (
            <Redirect to='/' />
        )
    }

    return (
        <div className="spot-container">
            <h2 value={spot.id} onClick={handleClick}>{spot.title}</h2>
            <img src={spot.imageUrl} alt={spot.title}/>
            <div className="location">{spot.city}, {spot.state}</div>
            <div className="price">${spot.price} / night</div>
        </div>
    )
}

export default Spots;