import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return <h2>Results:</h2>
  }
}

export default connect(null, { fetchArticles })(ArticleList)