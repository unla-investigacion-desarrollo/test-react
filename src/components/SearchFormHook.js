import React, { useState } from 'react';

export function SearchFormHook(props) {
  const [inputMovie, setInputMovie] = useState('')

  function handleChange(event) {
    setInputMovie(event.target.value)
  }

  function handleCleanSearch() {
    setInputMovie('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch(`${process.env.REACT_APP_OMDBAPI_API}/?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        // default value [] if we have not results
        const { Search = [] } = results
        props.onResults(Search, inputMovie)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            onChange={handleChange}
            type="text"
            placeholder="Movie to Search" 
            value={inputMovie}/>
        </div>
        <div className="control">
          <button
            className="button"
            onClick={handleCleanSearch}>
            Clean
          </button>
          <button className="button is-info">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}