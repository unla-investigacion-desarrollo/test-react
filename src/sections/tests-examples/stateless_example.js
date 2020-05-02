import React from 'react';
import PropTypes from 'prop-types';

function MsjSimple(props) {
  //Stateless con función
  return(
    <p>{ props.msj }</p>
  )
}

MsjSimple.propTypes = {
  msj: PropTypes.string.isRequired
}

const Msj = ({ msj1 = 'hooola', msj2 }) => (
  //Stateless con const
  <div>
    <p>{ msj1 }</p>
    <strong>{ msj2 }</strong>
  </div>
)

Msj.defaultProps = {
  msj2: '¿estás?'
}

const Stateless = (props) => (
  <div>
    <MsjSimple msj={ props.msj }/><Msj msj1={ props.msj1 } msj2={ props.msj2 }/>
  </div>
)

export default Stateless;