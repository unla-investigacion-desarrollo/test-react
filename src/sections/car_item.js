import React, { Component } from 'react';

class CarItem extends Component{
  render() {
    const { car } = this.props
    return(
      <li>
        <p><strong>Nombre: </strong>{car.name}</p>
        <p><strong>Marca: </strong>{car.company}</p>
      </li>
    )
  }
}

export default CarItem;