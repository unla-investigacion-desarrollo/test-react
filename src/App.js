import React, { Component } from 'react';
import './App.css';
import BitcoinPriceContainer from './sections/container-component'

class App extends Component {
  // recordar StrictMode
  render(){
    console.log("render App")
    return (
      <div>
        <BitcoinPriceContainer />
      </div>
    );
  }
}

export default App;
