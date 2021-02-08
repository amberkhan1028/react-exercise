import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class ArticleList extends React.Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    return <div>Articles:</div>
  }
}

export default connect(null, { fetchArticles })(ArticleList)