import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Search.css';

function Search({ searchTerm, setSearchTerm }) {
  const spots = useSelector(state => state.spots);

  const [newSpotsArr, setNewSpotsArr] = useState([]);

  useEffect(()=> {
    if (searchTerm !== ''){
        let temp = [];
        for(let key in spots) {
            if (isNaN(key)) break;
            let spot = spots[key];
            if ((spot.title.includes(searchTerm) || spot.city.includes(searchTerm) || spot.state.includes(searchTerm)) && temp.length < 7) {
                temp.push(spot);
            }
            setNewSpotsArr(temp);
        }
    } else {
        setNewSpotsArr([]);
    }
},[searchTerm, spots]);

  return (
        <div className='search-wrapper'>
            <input className='search-input' onChange={(e) => setSearchTerm(e.target.value)}></input>
            <div className='search-results-wrapper'>
                { searchTerm ? <div className="search-results">
                    {newSpotsArr.map((spot) => {
                        return (
                            <div key={spot.id + Math.random()}>
                                <NavLink id="spot-link" key={spot.id} to={`/spots/${spot.id}`}> 
                                    {spot.title} - {spot.city}, {spot.state}
                                </NavLink>
                            </div>
                                )
                    })}
                    </div> : <></>
                }
            </div>
        </div>
  );
}

export default Search;
