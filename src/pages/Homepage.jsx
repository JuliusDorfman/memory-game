import React, { Component } from 'react';
import Gameboard from '../components/Gameboard';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Memory-Game</h1>
          <h3>Match the cards in the least amount of clicks!</h3>
        </header>
        <div className="gameboard-label">
          <h2>Animal Shuffle!</h2>
        </div>
        <Gameboard />
      </div>
    )
  }
}
