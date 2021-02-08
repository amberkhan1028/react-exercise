import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import SearchResults from './components/SearchResults/SearchResults';
import Search from './components/Search';
import SearchHistory from './components/SearchHistory';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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
      <Search />
    </div>
    <div className={classes.resultsContainer}>
      <SearchResults />
      <SearchHistory />
    </div>
  </div>
  )
};

export default App;