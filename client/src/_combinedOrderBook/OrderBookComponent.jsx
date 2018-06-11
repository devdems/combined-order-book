import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import { FlexDiv, FlexSpacer } from './Components.styled'

const Container = styled.div`
  flex: 1 0;
  align-self: flex-start;
  width: 100%;
  position: absolute;
`
const BidAskLabel = FlexDiv.extend`
  font-size: 1.5em;
  margin-top: -10px;
  padding-bottom: 20px;
`


class OrderBookComponent extends React.Component {
  static propTypes = {
    book: PropTypes.arrayOf(PropTypes.object),
    initialFetching: PropTypes.bool,
    fetchFailedMsg: PropTypes.string,
  }

  static defaultProps = {
    book: [],
    initialFetching: false,
    fetchFailedMsg: '',
  }

  createColumns = () => {
    const { activeExchanges } = this.props;

    const exchanges = Object.keys(activeExchanges).filter(ex =>
      activeExchanges[ex]
    );
    const columns = [];

    exchanges.forEach(ex => {
      const header = {
        id: `${ex}_bid`,
        Header: `${ex.charAt(0).toUpperCase()}${ex.slice(1)}`,
        accessor: d => d.bids[ex] || 0,
      };
      columns.push(header)
    });

    columns.push(
      {
        id: 'totalBid',
        Header: 'Total',
        accessor: d => d.bids.totalVolume,
      },{
        id: 'bidPrice',
        Header: 'Bid Price',
        accessor: d => d.bidPrice,
      },{
        id: 'match',
        Header: 'Match',
        accessor: d => d.match,
      },{
        id: 'askPrice',
        Header: 'Ask Price',
        accessor: d => d.askPrice,
      },{
        id: 'totalAsk',
        Header: 'Total',
        accessor: d => d.asks.totalVolume,
      },
    )

    exchanges.forEach(ex => {
      const header = {
        id: `${ex}_ask`,
        Header: `${ex.charAt(0).toUpperCase()}${ex.slice(1)}`,
        accessor: d => d.asks[ex] || 0,
      };
      columns.push(header)
    });

    return columns
  }

  render() {
    const { book, fetchFailedMsg } = this.props;
    const columns = book.length && this.createColumns();
    console.log(book)
    return (
      <Container>
        {
          Object.keys(book).length ?
            <div>
              <FlexDiv>
                <BidAskLabel>Bids</BidAskLabel>
                <FlexSpacer size={20} />
                <BidAskLabel>Asks</BidAskLabel>
              </FlexDiv>
              <ReactTable
                data={book}
                columns={columns}
              />
            </div> :
          fetchFailedMsg.length ?
          fetchFailedMsg :
            ['Click Button Above to start']
        }
      </Container>
    )
  }
}

export default OrderBookComponent
