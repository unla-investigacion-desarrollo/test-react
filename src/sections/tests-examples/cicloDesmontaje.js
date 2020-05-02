import React, { Component } from 'react';

class ComponenteADesmontar extends Component {
  state = { windowWith: 0 }

  _updateStateWithWindowWith = () => {
    this.setState({ windowWith: document.body.clientWidth })
  }

  componentDidMount(){
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWith
    )
  }

  componentWillUnmount(){
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWith
    )
  }

  render(){
    return(
      <div>
        <p>Ancho de la página: { this.state.windowWith }</p>
      </div>
    )
  }
}

class CicloDesmontaje extends Component {
  render(){
    return(
      <div>
        <h4>Ejemplo de ciclo de desmontaje </h4>
        <ComponenteADesmontar />
      </div>
    )
  }
}

export default CicloDesmontaje