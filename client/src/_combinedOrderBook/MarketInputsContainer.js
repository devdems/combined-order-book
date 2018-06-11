import { connect } from 'react-redux';
import { operations } from './duck';
import MarketInputsComponent from './MarketInputsComponent';

const mapStateToProps = state => {
  const {
    marketPair,
  } = state.combinedOrderBook;
  return {
    marketPair,
  };
};

const mapDispatchToProps = dispatch => {
  const {
    setMarketPair,
  } = operations;
  return {
    setMarketPair: (pair) => dispatch(setMarketPair(pair)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MarketInputsComponent);
