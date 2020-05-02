import React, { Component } from 'react';
import './App.css';
import Stateless from './sections/stateless_example'

class App extends Component {
  render(){
    console.log("render App")
    return (
      <div>
        <h4>TEST CONDITIONAL</h4>
        < Stateless msj='hola' msj1='hello' msj2='¿cómo estás?'/>
      </div>
    );
  }
}

export default App;
