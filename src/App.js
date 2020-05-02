import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
// import CicloDesmontaje from './sections/cicloDesmontaje'
//import FetchExample from './sections/fetch_example'
//import CicloActualizacion from './sections/cicloActualizacion'
//import AppFull from './sections/app_full'


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

class App extends Component {
  render(){
    console.log("render App")
    return (
      <div>
        <h4>TEST CONDITIONAL</h4>
        < MsjSimple msj='hola'/>
        < Msj msj1='hello' msj2='¿cómo estás?'/>
        < Msj />
      </div>
    );
  }
}

export default App;
