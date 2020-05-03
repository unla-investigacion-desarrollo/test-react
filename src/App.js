import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {
  // recordar StrictMode
  state = { results: [] }

  _handleResuts = (results) => {
    this.setState({ results })
  }

  render(){
    console.log("render App")
    return (
      <div className='App'>
          <Title>Search Movies</Title>
          <div className="search-form-wrapper">
            <SearchForm onResults={this._handleResuts} />
          </div>
          {this.state.results.length === 0
            ? <p>Without results</p>
            : <MoviesList movies={this.state.results}/>
          }
      </div>
    );
  }
}

export default App;
