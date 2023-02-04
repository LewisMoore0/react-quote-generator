import React from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';

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
    return <wrapper id='#quote-box'>
       <GenerateQuote quotes={this.state.quotes} />
        <button id='#new-quote'>New Quote</button>
  </wrapper>

  }

    
  
}

export default App;
