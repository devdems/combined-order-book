import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1 0 auto;
  border: 1px solid red;
`

const FlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  flex-grow: ${props => props.grow ? props.grow : 1};
  justify-content: center;
  align-items: stretch;
  border: 1px solid blue;
`
const InformingText = styled.div`
  display: flex;
  font-size: 1.5em;
`

export default class CombinedOrderBookComponent extends React.Component {
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
              <FlexDiv>
                <FlexDiv grow={1}></FlexDiv>
                <FlexDiv grow={1}></FlexDiv>
              </FlexDiv>
            </FlexDiv>
        }
      </Container>
    )
  }
}
