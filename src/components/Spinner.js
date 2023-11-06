import React, { Component } from 'react'
import Ajax from './Ajax-loader.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Ajax} alt="loading"/>
        
      </div>
    )
  }
}

export default Spinner
