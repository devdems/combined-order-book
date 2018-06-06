import { connect } from 'react-redux'
import { operations } from './duck'
import ViewBooksButtonComponent from './ViewBooksButtonComponent'

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
    fetchBooks,
  } = operations;
  return {
    fetchBooks: () => dispatch(fetchBooks()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewBooksButtonComponent);
