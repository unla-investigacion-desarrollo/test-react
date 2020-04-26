import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ConditionalSection from './sections/conditional'
import Forms from './sections/forms'
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

class Box extends Component {
  static propTypes = {
    info: PropTypes.string.isRequired,
    // date: PropTypes.string.isRequired
    date: PropTypes.string
  }
  render(){
    const { info, date } = this.props
    return(
      <div style={{ border: '1px solid #09f', margin: 10, padding: 10 }}>
        <p>{info}</p>
        <p>{date &&<em>la fecha es {date}</em>}</p>
        {this.props.children}    
      </div>
    )
  }
}

const numbers = [1, 1, 3 ,4 ,5];

class App extends Component {
  constructor(){
    super()
    this.state = { mouseX: 0, mouseY: 0 };
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState( { mouseX: clientX, mouseY: clientY })
  }

  handleClick (e) {
    console.log(e)
    alert('Test 2')
  }
  render(){
    return (
      <div>
        <Forms />
        <ConditionalSection />
        <div>
          <button onClick={this.handleClick}>Test on clic</button>
        </div>
        <div
          onMouseMove={this.handleMouseMove}
          style={{ border: '1px solid #000', margin: 10, padding: 10 }}>
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
        <Box
          info='Info 1'
          date={new Date().toLocaleDateString()}>
            Test 1 children <strong>y puedo poner negritas si quiero</strong></Box>
        <Box
          info='Info 1'>
            Test 2 children</Box>
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
}

export default App;
