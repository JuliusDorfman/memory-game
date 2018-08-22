import React, { Component } from 'react';
import Gamecard from '../Gamecard';
import './Gameboard.css';

export default class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }


  render() {
    return (
      <div className="gameboard-container">
        <Gamecard />
      </div>
    )
  }
}
