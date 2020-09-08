import React from 'react';
import './News.css';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesArray: [],
    };
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
    fetch(req)
      .then((response) => {
        return response.json();
      })
      .then((news) => {
        this.setState({
          articlesArray: news['articles'],
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <button id='Refresh Articles' onClick={() => this.getNews()}>
            Refresh Articles
          </button>
        </div>
        <div>
          {this.state.articlesArray.map((item, index) => {
            return <h2>{item.title}</h2>;
          })}
        </div>
      </div>
    );
  }
}
