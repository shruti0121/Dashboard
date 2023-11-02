import React, { useState } from 'react';
import { FaAlignLeft, FaSearch } from "react-icons/fa"
import "../searchbox/SearchBox.scss"

function SearchBox() {

  return (
    <div className='hNav'>
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Search here..." type='search'></input>
        <i className='bx bx-bell' id='bell'></i>
        <i className='bx bx-user-circle'></i>
      </div>
    </div>
  );
}

export default SearchBox;
