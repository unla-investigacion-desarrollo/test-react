import React, { Component } from 'react';
import PropTypes from 'prop-types'

const API_KEY = 'd2b8197d'

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  state = { movie: {} }

  componentDidMount() {
    const { id } = this.props
    this._fetchMovie({ id })
  }

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(movie => {
      this.setState({ movie })
    })
  }

  // little example for now
  _goBack(){
    window.history.back()
  }

  render(){
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
    return(
      <div>
        <button onClick={this._goBack}>Go Back</button>
        <h1>{Title}</h1>
        <img src={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}