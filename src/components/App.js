import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import SearchHistory from './SearchHistory';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  resultsContainer: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
  <div>
    <div className={classes.searchContainer}>
      <h1>Search Hacker News!</h1>
      <SearchBar />
    </div>
    <div className={classes.resultsContainer}>
      <ArticleList />
      <SearchHistory />
    </div>
  </div>
  )
};

export default App;