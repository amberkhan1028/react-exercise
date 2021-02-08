import React, { useState } from "react";
import { connect } from 'react-redux';

const SearchHistory = (props) => {

  return (
    <div>
        <h2>Previous searches:</h2>
        <ul>
          {
            props.searches.map((item, index) => (
              <li>{item}</li>
            ))
          }
        </ul>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
    searches: state.articlesReducer.searches,
  }
}

export default connect(mapStateToProps, null)(SearchHistory)