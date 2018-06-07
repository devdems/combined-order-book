import { connect } from 'react-redux'
// import { operations } from './duck'
import OrderBookComponent from './OrderBookComponent'

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
}

// const mapDispatchToProps = dispatch => {
//   const {
//     fetchBookInitial,
//   } = operations;
//   return {
//     fetchBookInitial: () => dispatch(fetchBookInitial()),
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(OrderBookComponent);
