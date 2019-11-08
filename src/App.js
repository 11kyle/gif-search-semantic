import React, { Component } from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/Navbar';
import GIFList from './components/GIFList';

import './App.css';

import { Container } from 'semantic-ui-react';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true,
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = 'cats') => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    // Display in console
    // console.log(this.state.gifs);
    return (
      <Container>    
        <Navbar onSearch={this.performSearch} />     
        {
          (this.state.loading)
            ? <p>Loading...</p>
            : <GIFList data={this.state.gifs} />
        }          
      </Container>
    );
  }
}