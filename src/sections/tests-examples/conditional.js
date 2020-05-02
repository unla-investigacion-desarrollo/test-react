import React, {Component} from 'react';

function LoginButton() {
    return(
      <button>Iniciar Sesion</button>
    )
}

function LogoutButton() {
    return(
      <div>
        <p>Bienvenido!</p>
        <button>Salir</button>
      </div>
    )
}

export default class ConditionalSection extends Component {
  constructor(){
    super()
    this.state = { isUserLogged: true}
  }
  render(){
    return (
      <div>
        <h4>TEST CONDITIONAL</h4>
        {this.state.isUserLogged
          ? < LogoutButton />
          : < LoginButton />}
      </div>
    )
  }
}