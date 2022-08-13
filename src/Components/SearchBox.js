import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = () => {
  const search = (event) => {
    event.target.value = "Blocked 👻";
  };
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search by name..."
        onInput={(event) => search(event)}
      />
      <i>
        <BiSearchAlt />
      </i>
    </div>
  );
};

export default SearchBox;
