import React, { Component } from 'react';
import './App.styles.js'
import CombinedOrderBook from './_combinedOrderBook'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Combined Order Book</h1>
        </header>
        <CombinedOrderBook />
      </div>
    );
  }
}

export default App;
