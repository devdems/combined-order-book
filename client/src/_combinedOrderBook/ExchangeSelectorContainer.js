import { connect } from 'react-redux'
import { operations } from './duck'
import ExchangeSelectorComponent from './ExchangeSelectorComponent'

const mapStateToProps = state => {
  const {
    exchanges,
    activeExchanges,
  } = state.combinedOrderBook;
  return {
    exchanges,
    activeExchanges,
  };
}

const mapDispatchToProps = dispatch => {
  const {
    toggleExchange,
  } = operations;
  return {
    toggleExchange: (exchange) => dispatch(toggleExchange(exchange)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeSelectorComponent);
