import React from 'react';
import NewsItem from './NewsItem';
import './News.css';
import PropTypes from 'prop-types';

class News extends React.Component {
  render() {
    return this.props.news.map((article) => (
      <NewsItem key={article.id} news={article} />
    ));
  }
}

// Proptypes
News.propTypes = {
  news: PropTypes.array.isRequired,
};

export default News;
