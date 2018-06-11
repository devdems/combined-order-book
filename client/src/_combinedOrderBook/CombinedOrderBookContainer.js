import { connect } from 'react-redux';
import { operations } from './duck';
import CombinedOrderBookComponent from './CombinedOrderBookComponent';

const mapStateToProps = state => {
  const {
    fetchingExchanges,
    fetchingExchangesFailed,
  } = state.combinedOrderBook;
  return {
    fetchingExchanges,
    fetchingExchangesFailed,
  };
}

const mapDispatchToProps = dispatch => {
  const {
    fetchSupportedExchanges,
  } = operations;
  return {
    fetchSupportedExchanges: () => dispatch(fetchSupportedExchanges()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CombinedOrderBookComponent);
