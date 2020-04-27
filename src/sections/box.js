import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default Box;