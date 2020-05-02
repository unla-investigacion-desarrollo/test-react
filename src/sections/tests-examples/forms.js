import React, {Component} from 'react';

class Forms extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      lastname: '',
      dni: '',
      termns: true
    }
  }

  /*handleClick = (e) => {
    e.preventDefault()
    const name = this.inputName.value
    const apellido = document.getElementById('apellido').value
    const dni = document.getElementById('dni').value
    console.log({name, apellido, dni})
  }*/

  handleSubmit = (e) => {
    e.preventDefault()
    //const name = this.inputName.value
    //const apellido = document.getElementById('apellido').value
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({ termns: e.target.checked })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='nombre'>Nombre:</label>
            <input type='text' id='nombre' name='nombre'
              value={this.state.name}
              onChange={ e => this.setState({ name: e.target.value })}
              ref={ inputElemnt => this.inputName = inputElemnt }></input>
          </p>
          <p> 
            <label>Apellido:</label>
            <input type='text' id='apellido' name='apellido'
              value={this.state.lastname}
              onChange={ e => this.setState({ lastname : e.target.value })}></input>
          </p>
          <p>
            <label>DNI:</label>
            <input type='text' id='dni' name='dni'
              value={this.state.dni}
              onChange={ e => this.setState({ dni: e.target.value })}></input>
          </p>
          <p>
            <label>
              <input onChange={this.handleChange} type='checkbox' id='terminos' name='terminos'
                checked={this.state.termns}></input>
              Aceptar terminos y condificones
            </label>
          </p>
          <button>Enviar</button>
          {/* <button onClick={this.handleClick}>Enviar</button> */}
        </form>
      </div>
    )
  }
}

export default Forms;