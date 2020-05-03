import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {
  // recordar StrictMode
  state = { results: [] }

  _handleResuts = (results) => {
    this.setState({ results })
  }

  _renderResuts = () => {
    const { results } = this.state
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }

  render(){
    console.log("render App")
    return (
      <div className='App'>
          <Title>Search Movies</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResuts} />
          </div>
          {this.state.results.length === 0
            ? <p>Without results</p>
            : this._renderResuts()
          }
      </div>
    );
  }
}

export default App;
