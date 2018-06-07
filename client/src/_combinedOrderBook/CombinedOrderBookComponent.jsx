import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ExchangeSelector from './ExchangeSelectorContainer'
import MarketInputs from './MarketInputsContainer'
import FetchBookButton from './FetchBookButtonContainer'
import OrderBook from './OrderBookContainer'
import { FlexDiv } from './Components.styled'

const Container = styled.div`
  display: flex;
  flex: 1 0;
  max-width: 800px;
  width: 100%;
`
const InformingText = styled.div`
  display: flex;
  font-size: 1.5em;
`

class CombinedOrderBookComponent extends React.Component {
  static propTypes = {
    fetchingExchanges: PropTypes.bool,
  }

  static defaultProps = {
    fetchingExchanges: false,
  }

  constructor(props) {
    super(props)
    this.props.fetchSupportedExchanges()
  }

  render() {
    const { fetchingExchanges } = this.props
    return (
      <Container>
        {
          fetchingExchanges ?
            <InformingText>Fetching Supported Exchanges...</InformingText> :
            <FlexDiv direction="column">
              <FlexDiv grow={0.05} direction="column">
                <FlexDiv grow={1}>
                  <ExchangeSelector />
                </FlexDiv>
                <FlexDiv grow={1}>
                  <MarketInputs />
                  <FetchBookButton />
                </FlexDiv>
              </FlexDiv>
              <FlexDiv grow={1}>
                <OrderBook />
              </FlexDiv>
            </FlexDiv>
        }
      </Container>
    )
  }
}

export default CombinedOrderBookComponent
