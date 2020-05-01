import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
  delfin: 'https://goo.gl/BbiKCd',
  gato: 'https://goo.gl/PoQQXb'
}

const ANIMAL_KEYS = Object.keys(ANIMAL_IMAGES)

class Animales extends PureComponent {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  componentWillReceiveProps = (nextProps) =>{
    // Se ejecuta siempre, aunque las nextProps sean iguales a las props actuales
    console.log('=> componentWillReceiveProps')
    this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
  }

  /*shouldComponentUpdate(nextProps){
    console.log('shouldComponentUpdate')
    return nextProps.animal !== this.props.animal;
  }*/

  render(){
    console.log('=> render')
    return(
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

Animales.propTypes = {
  animal: PropTypes.oneOf(ANIMAL_KEYS)
}

class CicloActualizacion extends Component {
  state = { animal: 'delfin' }

  _renderAnimalButton = (animal) =>{
    return(
      <button
        // disabled={animal === this.state.animal}
        key={animal}
        onClick={() => this.setState({ animal })}>
          { animal }
      </button>
    )
  }

  render(){
    return(
      <div>
        <h4>Ejemplo de ciclo de actualización </h4>
        {ANIMAL_KEYS.map(this._renderAnimalButton)}
        <Animales animal={this.state.animal}/>
      </div>
    )
  }
}

export default CicloActualizacion