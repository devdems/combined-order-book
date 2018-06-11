import React, { Component } from 'react';
import './App.styles.js';
import CombinedOrderBook from './_combinedOrderBook';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  color: white;
  flex: .05 0;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  flex: 1 0;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Title>Combined Order Book</Title>
        </Header>
        <Content>
          <CombinedOrderBook />
        </Content>
      </Container>
    );
  }
}

export default App;
