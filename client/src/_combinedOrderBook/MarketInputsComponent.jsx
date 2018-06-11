import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FlexDiv, FlexSpacer } from './Components.styled';

const Container = styled.div`
  display: flex;
  flex: 1 0;
  flex-direction: column;
`;

const Input = styled.input`
  max-width: 80px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid grey;
  font-size: 1.3em;
  text-align: center;
`;


class MarketInputsComponent extends React.Component {
  static propTypes = {
    setMarketPair: PropTypes.func.isRequired,
    marketPair: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    marketPair: ['BTC', 'ETH'],
  }

  shouldComponentUpdate = nextProps => {
    return (
      this.props.marketPair !== nextProps.marketPair
    );
  }

  updateMarketPair = (index, e) => {
    const { marketPair, setMarketPair } = this.props;
    const newMarketPair = [...marketPair];
    if (e.target.value.length <= 4) {
      newMarketPair[index] = e.target.value.toUpperCase();
      setMarketPair(newMarketPair);
    }
  }

  render() {
    const { marketPair } = this.props;
    return (
      <Container>
        Pair:
        <FlexDiv>
          <FlexSpacer grow={1} />
          <Input
            value={marketPair[0]}
            onChange={e => this.updateMarketPair(0, e)}
          />
          <FlexSpacer grow={.1}>-</FlexSpacer>
          <Input
            value={marketPair[1]}
            onChange={e => this.updateMarketPair(1, e)}
          />
          <FlexSpacer grow={1} />
        </FlexDiv>
      </Container>
    );
  }
}

export default MarketInputsComponent;
