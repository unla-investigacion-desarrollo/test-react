import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

import './App.css'
import 'bulma/css/bulma.css'

class App extends Component {
  // recordar StrictMode
  state = { usedSearch: false, results: [] }

  _handleResuts = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults(results) {
    return results.length === 0
      ? <p>Without results :/</p>
      : <MoviesList movies={results}/>
  }

  render(){
    console.log("render App")
    return (
      <div className='App'>
          <Title>Search Movies</Title>
          <div className="search-form-wrapper">
            <SearchForm onResults={this._handleResuts} />
          </div>
          {this.state.usedSearch
            ? this._renderResults(this.state.results)
            : <p>Use this form to search a movie</p>
          }
      </div>
    );
  }
}

export default App;
