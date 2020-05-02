import React, { Component } from 'react';

class FetchExample extends Component {
  constructor(props){
    super(props)
    this.state = { bpi: {} };
  }
  
  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => {
        const { bpi } = data
        this.setState({ bpi })
      })
  }

  _renderCurrencies(){
    const { bpi } = this.state
    const currencies = Object.keys(bpi)
    return currencies.map(currency => (
            <div key={currency}>
              1 BTC is {bpi[currency].rate}
              <span>{currency}</span>
            </div>
    ))
  }

  render(){
    console.log('render')
    return (
      <div>
        FetchExample Bitcoin Price Index
        {this._renderCurrencies()}
      </div>
    )
  }
}

export default FetchExample;