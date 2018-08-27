import React from 'react';
import './SearchBar.css';

const SearchBar = ( props ) => (
  <div className="search-filter">
    <div>
      <label htmlFor="select" >Search by Model</label>
      <input 
        type="text"
        placeholder="Type search.."
        onChange={props.textChange}
      />
    </div>
    <div>
      <label >Filter Battery Level</label>
    
      <input 
        type="number"
        placeholder="Enter Lower level"
        onChange={props.batteryLevelChange('batteryLowerLevel')}
      />
      <input 
        type="number"
        placeholder="Enter HigerLevel"
        onChange={props.batteryLevelChange('batteryHigherLevel')}
      />
    </div>
  </div>
)

export default SearchBar;