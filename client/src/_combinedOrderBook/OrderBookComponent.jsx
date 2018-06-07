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
    const headers = [];
    exchanges.forEach(ex => {
      const header = {
        id: ex,
        Header: `${ex.charAt(0).toUpperCase()}${ex.slice(1)}`,
        accessor: d => d.bids[ex] || 0,
      }
      headers.push(header)
    });
    headers.push({
        id: 'totalVolume',
        Header: 'Combined Volume',
        accessor: d => d.bids.totalVolume,
      },{
        id: 'bidPrice',
        Header: 'Bid Price',
        accessor: d => d.bidPrice,
      },{
        id: 'match',
        Header: 'Match?',
        accessor: d => d.match,
      },{
        id: 'askPrice',
        Header: 'Ask Price',
        accessor: d => d.askPrice,
      },{
        id: 'totalVolume',
        Header: 'Combined Volume',
        accessor: d => d.asks.totalVolume,
      },
    )
    exchanges.forEach(ex => {
      const header = {
        id: ex,
        Header: `${ex.charAt(0).toUpperCase()}${ex.slice(1)}`,
        accessor: d => d.asks[ex] || 0,
      }
      headers.push(header)
    });
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
