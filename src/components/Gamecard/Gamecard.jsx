import React, { Component } from 'react';
import './Gamecard.css';

export default class Gamecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCards: 12,
      cardValue: [1, 2, 3, 4, 5, 6],
      cardImage: ["betta-fish.jpg", "chihuahua.jpg", "german-shepherd.jpg", "parakeet.png", "shibe.jpg", "sphynx.jpg"],
      gameCards: []
    };
  }

  generateCards() {
    let cardList = [];
    function Card(value, img) {
      this.value = value;
      this.img = img
    }

    for (let i = 0; i < (this.state.numberOfCards / 2); i++) {
      for (let j = 0; j < 2; j++) {
        let myCard = new Card(this.state.cardValue[i], this.state.cardImage[i])
        cardList.push(myCard)
      }
    }

    this.setState({ gameCards: cardList }, () => {
    })

  }

  componentWillMount() {
    this.generateCards()
  }

  render() {
    return (
      <div className="gamecard-component">
        <div className="game-cards">
          {this.state.gameCards.map((gameCard, index) => {
            return (<div className="card-container" key={gameCard.img + index + 1} value={gameCard.value}>{index + 1}<img className="single-card" src={`../../assets/images/${gameCard.img}`} alt={gameCard.img} title={gameCard.img} /></div>)
          })}
        </div>
      </div>
    )
  }
}

