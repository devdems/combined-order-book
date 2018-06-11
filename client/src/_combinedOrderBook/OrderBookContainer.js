import { connect } from 'react-redux';
import OrderBookComponent from './OrderBookComponent';

const mapStateToProps = state => {
  const {
    book,
    initialFetching,
    fetchFailedMsg,
    activeExchanges,
  } = state.combinedOrderBook;
  return {
    book,
    initialFetching,
    fetchFailedMsg,
    activeExchanges,
  };
};

export default connect(
  mapStateToProps,
)(OrderBookComponent);
