import React, { Component } from 'react';
import './App.css';
import News from './components/News.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesArray: [],
    };
  }

  componentDidMount() {
    this.getNews();
  }

  //Get articles title, content, author, etc. from an API request
  getNews() {
    this.setState({ articlesArray: [] });
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
    return (
      <div className='App'>
        <News news={this.state.articlesArray} />
      </div>
    );
  }
}

export default App;
