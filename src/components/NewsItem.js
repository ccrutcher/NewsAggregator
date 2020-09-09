import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './News.css';

export class NewsItem extends Component {
  render() {
    return (
      <div className='articleDisplayContainer'>
        <h2>
          <a href={this.props.news.url}>{this.props.news.title}</a>
        </h2>
        <h4>Author: {this.props.news.author}</h4>
        <div id='img-container'>
          <img
            className='articleImage'
            src={this.props.news.urlToImage}
            alt={this.props.news.description}
            style={{ width: '30vw' }}
          />
          <p>{this.props.news.content}</p>
        </div>
      </div>
    );
  }
}

//Proptypes
NewsItem.propTypes = {
  news: PropTypes.object.isRequired,
};

export default NewsItem;
