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
      ]
  }
  }

  render() {

    const generateNumber = () => {
      let minNumber = 0
      let maxNumber = this.state.quotes.length

      return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber)
    }

    const number = generateNumber()

    return (
    <wrapper id='#quote-box'>
       <GenerateQuote quotes={this.state.quotes} number={number} />
       <GenerateAuthor quotes={this.state.quotes} number={number} />
        <button id='#new-quote'>New Quote</button>
  </wrapper>
  )

  }

    
  
}

export default App;
