import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render () {
    const { movies } = this.props
    return(
      <div className='movies-list'>
        {
          movies.map(movie => {
            return (
              <div className='movies-list-item' key={movie.imdbID}>
                <Movie
                  poster={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                />
              </div>
            )})
        }
      </div>
    )
  }
}




