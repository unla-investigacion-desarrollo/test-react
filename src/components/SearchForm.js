import React, { Component } from 'react';

const I_API_KEY = 'tt3896198'
const API_KEY = 'd2b8197d'

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
    fetch(`http://www.omdbapi.com/?i=${I_API_KEY}&apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search, totalResults } = results
        console.log({ Search, totalResults })
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