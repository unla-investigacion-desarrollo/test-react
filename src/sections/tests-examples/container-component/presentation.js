import React, { Component } from 'react';

class BitcoinPricePresentation extends Component {
  _renderCurrencies(){
    const { bpi } = this.props
    const currencies = Object.keys(bpi)
    return currencies.map(currency => (
            <div key={currency}>
              1 BTC is {bpi[currency].rate}
              <span>{currency}</span>
            </div>
    ))
  }

  render(){
    return (
      <div>
        FetchExample Bitcoin Price Index
        {this._renderCurrencies()}
      </div>
    )
  }
}

export default BitcoinPricePresentation;