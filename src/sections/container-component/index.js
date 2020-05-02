import React, { Component } from 'react';
import BitcoinPricePresentation from './presentation';

class BitcoinPriceContainer extends Component {
  state = { bpi: {} };
  
  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data
        this.setState({ bpi })
      })
  }

  render(){
    console.log('render')
    return (
      <div>
        <BitcoinPricePresentation bpi={ this.state.bpi } />
      </div>
    )
  }
}

export default BitcoinPriceContainer;