import React, { Component } from 'react';

export class SearchForm extends Component {
  state = {
    inputMovie: ''
  }

  _handleChange = (e) => {
    this.setState({ inputMovie: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputMovie } = this.state
    fetch(`${process.env.REACT_APP_OMDBAPI_API}/?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        // default value [] if we have not results
        const { Search = [] } = results
        this.props.onResults(Search)
      })
  }

  render(){
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to Search" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}