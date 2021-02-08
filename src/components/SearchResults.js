import React from 'react';
import { connect } from 'react-redux';

const SearchResults = (props) => {

  return (
    <div>
        <h2>Results:</h2>
        <table>
          <thead>
            <tr>
              <th width="200">Title</th>
              <th width="200">Author</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
          {
            props.results.map((item, index) => (
              <tr>
                <td width="200">{item.title}</td>
                <td width="200">{item.author}</td>
                <td>{item.created_at}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {
      // searches: state.searches,
      results: state.articlesReducer.results
  }
}


export default connect(mapStateToProps, null)(SearchResults);