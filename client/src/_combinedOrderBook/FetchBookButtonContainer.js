import { connect } from 'react-redux'
import { operations } from './duck'
import FetchBookButtonComponent from './FetchBookButtonComponent'

const mapStateToProps = state => {
  const {
    initialBookFetching,
    autoUpdateIntervalObj,
  } = state.combinedOrderBook;
  return {
    initialBookFetching,
    autoUpdateIntervalObj,
  };
}

const mapDispatchToProps = dispatch => {
  const {
    fetchBookInitial,
  } = operations;
  return {
    fetchBookInitial: () => dispatch(fetchBookInitial()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchBookButtonComponent);
