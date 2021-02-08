import React, { useState } from "react";


const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const callSearchFunction = (e) => {
    console.log(e);
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChange}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="search" />
      </form>
    );
}

export default SearchBar;