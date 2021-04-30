import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Search.css';

function Search({ search, setSearch, searchTerm, setSearchTerm, newSpots, setNewSpots}) {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  const handleClick = () => {
    dispatch(spotReducer.searchSpots());
  }

  let newSpotsArr = [];

  useEffect(()=> {
    if (searchTerm !== ''){
        console.log(searchTerm, 'SEARCH TERM');
        for(let key in spots) {
            if (isNaN(key)) break;
            let spot = spots[key];
            if (spot.title.includes(searchTerm) || spot.city.includes(searchTerm) || spot.state.includes(searchTerm)) {
                newSpotsArr.push(spot);
            }
        }
        console.log(newSpotsArr, "newSpotsArr")
        setNewSpots(newSpotsArr);
    }
  },[searchTerm, setNewSpots, spots]);

  console.log(newSpots, "newSpots")

  function random() {
      return Math.random();
  }

  if (!newSpots) {
      return null
  }

  return (
        <div className='search-wrapper'>
            <div className='search-button-container'>
                <button className='search-button' onClick={handleClick} >Search</button>
            </div>
            <div className='search-bar'>
                <input onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
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
  );
}

export default Search;
