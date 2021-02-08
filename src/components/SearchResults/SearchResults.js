import React from 'react';
import { connect } from 'react-redux';
import './SearchResults.css';

const SearchResults = (props) => {
  return (
    <div>
        <h2>Results:</h2>
        {
            props.results.map((item, index) => (
              <div key={index} className="article">
                <div>
                  <a href={item.url} className="title">{item.title}</a>
                </div>
                <div className="author">by {item.author}</div>
              </div>
            ))
          }
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
      results: state.articlesReducer.results
  }
}


export default connect(mapStateToProps, null)(SearchResults);