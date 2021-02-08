import React from 'react';
import { connect } from 'react-redux';

const ArticleList = (props) => {

  return (
    <div>
        <h2>Results:</h2>
        <ul>
          {
            props.results.map((item, index) => (
              <li>{item.title}&nbsp;{item.created_at}</li>
            ))
          }
        </ul>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
      // searches: state.searches,
      results: state.articlesReducer.results
  }
}


export default connect(mapStateToProps, null)(ArticleList);