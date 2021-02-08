import React, { useState } from "react";
import { Button, Input } from '@material-ui/core';
import {connect} from 'react-redux';

import axios from 'axios';
import * as actions from '../actions'


const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    console.log("search submitted");
    const url = `https://hn.algolia.com/api/v1/search?query=${searchValue}`;
    const response = await axios.get(url);
    props.handleFetchArticles(response.data, searchValue);
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
        <Button onClick={handleFormSubmit} type="submit" variant="contained" color="primary">go</Button>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFetchArticles: (articles, search) => {dispatch(actions.fetchArticles(articles, search))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);