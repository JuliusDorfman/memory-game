import React, { Component } from 'react';
import './Gamecard.css';

export default class Gamecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfCards: 12,
      cardValue: [1, 2, 3, 4, 5, 6],
      cardImage: ["betta-fish.jpg", "chihuahua.jpg", "german-shepherd.jpg", "parakeet.png", "shibe.jpg", "sphynx.jpg"],
      gameCards: [],
      heldCardValues: [],
      displayNone: "none",
      displayInline: "inline-block"
    };
    this.handleClick = this.handleClick.bind(this);
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
    this.shuffleCards(cardList)
  }

  /**
 * Here is a JavaScript implementation of the Durstenfeld shuffle, a computer-optimized version of Fisher-Yates:
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */

  shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ gameCards: array }, () => {
      console.log(this.state.gameCards)
    })
  }

  handleClick(e) {
    let currentCard = this.state.heldCardValues;
    let cardValue = e.target.getAttribute('value');

    if (this.state.heldCardValues.length < 2) {
      this.setState({ heldCardValues: currentCard.concat(cardValue) }, () => {
        if (this.state.heldCardValues.length === 2) {
          if (this.state.heldCardValues[0] === this.state.heldCardValues[1]) {
            console.log(this.state.heldCardValues)
            console.log('match')
            this.setState({ heldCardValues: [] }, () => {
            })
          } else {
            console.log(this.state.heldCardValues)
            console.log('no match')
            this.setState({ heldCardValues: [] }, () => {
            })
          }
        }
      })
    }

  }

  componentWillMount() {
    this.generateCards()
  }

  render() {
    return (
      <div className="gamecard-component">
        <div className="game-cards">
          {this.state.gameCards.map((gameCard, index) => {
            return (
              <div className="card-container"
                key={gameCard.img + index + 1}>
                <div className="card-overlay"
                  onClick={this.handleClick}
                  value={gameCard.value}
                />
                <img className="single-card"
                  src={`../../assets/images/${gameCard.img}`}
                  onClick={this.handleClick}
                  value={gameCard.value}
                  alt={gameCard.img}
                  title={gameCard.img} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

