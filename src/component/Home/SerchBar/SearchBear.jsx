import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./SearchBear.css"

const SearchBear = ({value, changeInput}) => {
  return (
    <div className='searchBar-wrap'>
      <SearchIcon className='searchBar-icon' />
      <input
        type="text"
        placeholder='WoodLand Hilss'
        value={value}
        onChange={changeInput}
      />
    </div>
  );
}

export default SearchBear;
