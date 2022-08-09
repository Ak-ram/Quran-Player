import React, { useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = ({songs}) =>{
    return(
        <div className="searchBox">
        <input type="text" placeholder="Search by name..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>
    )
}

export default SearchBox;