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
            if (spot.title.includes(searchTerm.toLowerCase() || searchTerm.toUpperCase()) || spot.city.includes(searchTerm.toLowerCase() || searchTerm.toUpperCase()) || spot.state.includes(searchTerm.toLowerCase() || searchTerm.toUpperCase())) {
                temp.push(spot);
            }
            setNewSpotsArr(temp);
        }
    } else {
        setNewSpotsArr([]);
    }
},[searchTerm, spots]);

  function random() {
      return Math.random();
  }

  return (
        <div className='search-wrapper'>
            <input className='search-input' onChange={(e) => setSearchTerm(e.target.value)}></input>
            <div className='search-results-wrapper'>
                { searchTerm ? <div className="search-results">
                    {newSpotsArr.map((spot) => {
                        return (
                            <div key={spot.id + random()}>
                                <NavLink id="spot-link" key={spot.id} to={`/spots/${spot.id}`}> 
                                    {spot.title}
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
