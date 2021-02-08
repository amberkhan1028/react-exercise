import React, { useState } from "react";
import { Button, Input } from '@material-ui/core';
import {connect} from 'react-redux';
import axios from 'axios';
import { fetchArticles } from '../actions'


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const url = `https://hn.algolia.com/api/v1/search?query=${searchValue}`;
    const response = await axios.get(url);
    props.handleFetchArticles(response.data, searchValue);
    resetInputField();
  }

  return (
      <div>
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
    handleFetchArticles: (articles, search) => {dispatch(fetchArticles(articles, search))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);