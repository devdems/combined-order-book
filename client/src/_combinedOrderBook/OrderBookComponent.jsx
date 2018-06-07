import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Spinner from 'react-spinner-material';

import { FlexDiv } from './Components.styled'

const Container = styled.div`
  flex: 1 0;
  width: 100%;
`


class OrderBookComponent extends React.Component {
  static propTypes = {
    book: PropTypes.object,
    initialFetching: PropTypes.bool,
    fetchFailedMsg: PropTypes.string,
  }

  static defaultProps = {
    book: {},
    initialFetching: false,
    fetchFailedMsg: '',
  }

  createColumns = () => {
    const { activeExchanges } = this.props;
    const exchanges = Object.keys(activeExchanges).filter(ex =>
      activeExchanges[ex]
    );
    const headers = {
      bids: [],
      asks: [],
    }
    exchanges.forEach(ex => {
      const header = {
        id: ex,
        Header: `${ex.charAt(0).toUpperCase()}${ex.slice(1)}`,
        accessor: d => d[ex] || 0,
      }
    })
  }

  render() {
    const {

     } = this.props
    return (
      <Container>
        hi
      </Container>
    )
  }
}

export default OrderBookComponent
