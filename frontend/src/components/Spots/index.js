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
        <div className="spots__container">
            <h2 value={spot.id} onClick={handleClick}>{spot.title}</h2>
            <img src={spot.imageUrl} alt={spot.title}/>
            <div>${spot.price} / Night</div>
        </div>
    )
}

export default Spots;