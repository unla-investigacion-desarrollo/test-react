import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional'
import cars from './data/cars.json'

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

function App() {
  const numbers = [1, 1, 3 ,4 ,5]
  return (
    <div>
      <ConditionalSection />
      <div>
        {numbers.map((number, index) => {
          return <p key={index}>Soy el número {number}</p>})}
      </div>
      <div>
        <ul>
          {
            cars.map(car => {
              return <CarItem key={car.id} car={car} />
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
