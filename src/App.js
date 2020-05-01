import React, { Component } from 'react';
import './App.css';
import FetchExample from './sections/fetch_example'
import CicloActualizacion from './sections/cicloActualizacion'

//import AppFull from './sections/app_full'


class App extends Component {
  render(){
    console.log("render App")
    return (
      <div>
        <CicloActualizacion />
        <FetchExample />
      </div>
    );
  }
}

export default App;
