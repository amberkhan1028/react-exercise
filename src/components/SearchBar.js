import React, { useState } from "react";
import { Button, Input } from '@material-ui/core';


const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <div className="search">
        <Input
          value={searchValue}
          onChange={handleSearchInputChange}
          id="outlined-basic"
          placeholder="enter search term"
          variant="outlined"
        />
        <Button onClick={callSearchFunction} type="submit" variant="contained" color="primary">go</Button>
      </div>
    );
}

export default SearchBar;