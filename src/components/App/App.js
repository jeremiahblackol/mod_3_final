import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';


// for the commit

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.addUrlToState()
  }

  addUrlToState = async () => {
    const retrievedUrl = await getUrls()
    this.setState({ urls: [retrievedUrl]})
  }

  urlPostRequest = (longUrl, urlTitle) => {
    postUrls(longUrl, urlTitle)
    console.log(this.state.urls)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrls={this.urlPostRequest}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
