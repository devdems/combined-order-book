import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-spinner-material'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'row'}
  justify-content: center;
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
            <Container direction="column">
              <InformingText>Fetching Supported Exchanges</InformingText>
              <Spinner
                visible
                size={200}
                spinnerColor='blue'
                spinnerWidth={10}
              />
            </Container> :
            <Container>DONE</Container>
        }
      </Container>
    )
  }
}
