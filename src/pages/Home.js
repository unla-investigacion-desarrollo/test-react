import React, { Component } from 'react';
import { Title } from '../components/Title'
import { SearchFormHook } from '../components/SearchFormHook'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component {
  state = { usedSearch: false, results: [] }

  _handleResuts = (results, inputMovie) => {
    const hasInput = inputMovie !== ''
    this.setState({ results, usedSearch: hasInput })
  }

  _renderResults() {
    return this.state.results.length === 0
      ? <p>Without results :/</p>
      : <MoviesList movies={this.state.results}/>
  }

  render(){
    return(
      <div>
          <Title>Search Movies</Title>
          <div className="search-form-wrapper">
            <SearchFormHook onResults={this._handleResuts} />
          </div>
          {this.state.usedSearch
            ? this._renderResults()
            : <p>Use this form to search a movie</p>
          }
      </div>
    )
  }
}