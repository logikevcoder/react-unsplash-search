import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


export default class App extends Component {

  state = { 
    images: [],
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('search/photos', {
      params: { query: term },
    });

    console.log(this);
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '15px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    )
  }
}
