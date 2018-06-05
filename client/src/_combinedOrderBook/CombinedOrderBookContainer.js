import { connect } from 'react-redux'
import { operations } from './duck'
import CombinedOrderBookComponent from './CombinedOrderBookComponent'

const mapStateToProps = state => {
  const {
    fetchingExchanges,
  } = state.combinedOrderBook;
  return {
    fetchingExchanges,
  };
}

const mapDispatchToProps = dispatch => {
  const {
    fetchSupportedExchanges,
  } = operations;
  return {
    fetchSupportedExchanges: () => dispatch(fetchSupportedExchanges()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CombinedOrderBookComponent);
