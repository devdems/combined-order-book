import React, { Component } from 'react';
import './App.styles.js'
import CombinedOrderBook from './_combinedOrderBook'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  min-height: 50vh;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Combined Order Book</h1>
        </header>
        <Container>
          <CombinedOrderBook />
        </Container>
      </div>
    );
  }
}

export default App;
