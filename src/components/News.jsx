import React from 'react';
import './News.css';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newsArray: [],
    };
    //array of news articles
  }

  componentDidMount() {
    this.getNews();
  }

  getNews() {
    let url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=26f03b33e12649d497df8c7743274aad';
    let req = new Request(url);
    fetch(req).then(function (response) {
      console.log(response.json());
    });
  }

  render() {
    return (
      <div>
        <button id='Refresh Articles' onClick={() => this.getNews()}>
          Refresh Articles
        </button>
      </div>
    );
  }
}
