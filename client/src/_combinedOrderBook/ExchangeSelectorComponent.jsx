import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FlexDiv } from './Components.styled'

const Container = styled.div`
  display: flex;
  flex: 1 0;
  max-width: 80%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid green;
  height: 60px;
`
const ExchangeButton = FlexDiv.extend`
  background-color: ${props => props.active ? 'green' : 'white'};
  flex: 1 1;
`

class ExchangeSelectorComponent extends React.Component {
  static propTypes = {
    toggleExchange: PropTypes.func.isRequired,
    exchanges: PropTypes.arrayOf(PropTypes.string),
    activeExchanges: PropTypes.object,
  }

  static defaultProps = {
    exchanges: [],
    activeExchanges: {},
  }

  renderExchangeButtons = () => {
    const {
      exchanges,
      activeExchanges,
      toggleExchange,
    } = this.props;

    return exchanges.map(exchange => {
      const active = activeExchanges[exchange] || false;
      const exchangeName = `${exchange.charAt(0).toUpperCase()}${exchange.slice(1)}`;

      return (
        <ExchangeButton
          key={exchange}
          active={active}
          onClick={() => toggleExchange(exchange)}
        >
          { exchangeName }
        </ExchangeButton>
      )
    });
  }

  render() {
    return (
      <Container>
        { this.renderExchangeButtons() }
      </Container>
    )
  }
}

export default ExchangeSelectorComponent
