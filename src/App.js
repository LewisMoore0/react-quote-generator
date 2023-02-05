import React from 'react';
import GenerateQuote from './GenerateQuote';
import GenerateAuthor from './GenerateAuthor';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: [
          {
              quote: 'First Quote',
              author: 'Lewis'
          },
          {
              quote: 'Second Quote',
              author: 'Anna'
          }
      ],
      number: 0
  }
  }

  render() {

    const generateNumber = () => {
      let minNumber = 0
      let maxNumber = this.state.quotes.length

      return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    }

    const generateNewQuote = () => {
      this.setState(state => {
        return { number: generateNumber() }
      })
    }

    return (
    <wrapper id='#quote-box'>
      <h2 id='#text'><GenerateQuote quotes={this.state.quotes} number={this.state.number} /></h2>
       <GenerateAuthor quotes={this.state.quotes} number={this.state.number} />
       <button id='#new-quote' onClick={generateNewQuote}>New Quote</button>
  </wrapper>
  )

  }

    
  
}

export default App;
