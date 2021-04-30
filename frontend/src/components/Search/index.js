import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotReducer from '../../store/spot';
import './Filter.css';

function FilterSearch({ setFilter, setSearchTerm, setNewSpots, searchTerm, newSpots}) {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.allSpots);

  const handleClick = () => {
    dispatch(spotReducer.sortSpots())
    setFilter('filtered')
  }

  useEffect(()=> {

    let newSpotsArr = []

    if(searchTerm !== ''){
      for(let i = 0; i < spots.length; i++) {
        let spot = spots[i];
        if(spot.city.includes(searchTerm)) {
          newSpotsArr.push(spot)
        }
      }
      setNewSpots(newSpotsArr)
    }
  },[searchTerm, setNewSpots, spots])



  return (
    <div className='filter__container'>
      <h4 className='filter-title'>Filter</h4>
      <div className='search-btn-div'>
        <button className='search-btn' onClick={handleClick} >Lowest Price</button>
      </div>
      <div className='search-bar-title'>
        Search
      </div>
      <div className='search-bar'>
        <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      </div>
    </div>
  );
}

export default FilterSearch;
