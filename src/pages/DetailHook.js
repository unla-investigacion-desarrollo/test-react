import React, { useState, useEffect } from 'react';
import { ButtonBackHome } from '../components/ButtonBackHome'

export function DetailHook(props) {
  const [idMovie] = useState(props.match.params.id)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    console.log('DetailHook useEffect')
    fetch(`${process.env.REACT_APP_OMDBAPI_API}/?apikey=${process.env.REACT_APP_OMDBAPI_API_KEY}&i=${idMovie}`)
    .then(res => res.json())
    .then(movie => {
      setMovie(movie)
    })
  },[idMovie])

  return(
    <div>
      <ButtonBackHome />
      <h1>{movie.Title}</h1>
      <img alt='' src={movie.Poster} />
      <h3>{movie.Actors}</h3>
      <span>{movie.Metascore}</span>
      <p>{movie.Plot}</p>
    </div>
  )
}