import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as spotReducer from '../../store/spot';
import './Search.css';

function Search({ searchTerm, setSearchTerm }) {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  const [newSpotsArr, setNewSpotsArr] = useState([]);

  useEffect(()=> {
    if (searchTerm !== ''){
        console.log(searchTerm, 'SEARCH TERM');
        let temp = [];
        for(let key in spots) {
            if (isNaN(key)) break;
            let spot = spots[key];
            if (spot.title.includes(searchTerm) || spot.city.includes(searchTerm) || spot.state.includes(searchTerm)) {
                temp.push(spot);
            }
            setNewSpotsArr(temp);
        }
        // setNewSpots(newSpotsArr);
    } else {
        setNewSpotsArr([]);
    }
},[searchTerm, spots]);

console.log(newSpotsArr, "newSpotsArr")

  function random() {
      return Math.random();
  }

  return (
        <div className='search-wrapper'>
            {/* <div className='search-button-container'>
                <button className='search-button' onClick={handleClick} >Search</button>
            </div> */}
            <div className='search-bar'>
                <input className='search-input' onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
            <div className='search-results-wrapper'>
                { searchTerm ? <div className="search-results">
                    {newSpotsArr.map((spot) => {
                        return (
                            <div key={spot.id + random()}>
                                {spot.title}
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
