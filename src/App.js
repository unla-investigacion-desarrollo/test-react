import React, { Component } from 'react';
import './App.css';
import ConditionalSection from './sections/conditional'
import Forms from './sections/forms'
import Box from './sections/box'
import CarItem from './sections/car_item'
import FetchExample from './sections/fetch_example'
import cars from './data/cars.json'

const numbers = [1, 1, 3 ,4 ,5];

class App extends Component {
  constructor(props){
    console.log("constructor App")
    super(props)
    this.state = { mouseX: 0, mouseY: 0, scroll: 0 };
  }

  componentWillMount(){
    console.log("WillMount App")
  }

  componentDidMount(){
    console.log("DidMount App")
    // esta subscripción no se elimina automaticamente
    document.addEventListener('scroll', () => {
      this.setState({ scroll: window.scrollY })
    })
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
    console.log("render App")
    return (
      <div>
        <FetchExample />
        <Forms />
        <ConditionalSection />
        <div>
          <button onClick={this.handleClick}>Test on clic</button>
        </div>
        <div>
          <p>El scroll Y es: {this.state.scroll}</p>
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
