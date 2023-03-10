import React from 'react';
import GenerateQuote from './GenerateQuote';
import GenerateAuthor from './GenerateAuthor';
import quotes from './quotes.js'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: quotes,
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

    const styles = {
      border: 3,
      textColor: 'red'
    }

    return (
    <wrapper id='#quote-box' class='.quotewrapper'>
      <h2 id='#text'><GenerateQuote quotes={this.state.quotes} number={this.state.number} styles={styles}/></h2>
       <p id='#text'><GenerateAuthor quotes={this.state.quotes} number={this.state.number} tyles={styles}/></p>
       <button id='#new-quote' onClick={generateNewQuote}>New Quote</button>
  </wrapper>
  )

  }

    
  
}

export default App;
