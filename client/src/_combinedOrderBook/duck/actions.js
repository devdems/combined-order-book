import types from './types'

const getSupportedExchanges = () => ({
  type: types.GET_SUPPORTED_EXCHANGES,
});

const getSupportedExchangesSuccess = exchanges => ({
  payload: exchanges,
  type: types.GET_SUPPORTED_EXCHANGES_SUCCESS,
});

const getSupportedExchangesFail = msg => ({
  payload: msg,
  type: types.GET_SUPPORTED_EXCHANGES_FAIL,
});

const toggleExchange = exchange => ({
  payload: exchange,
  type: types.TOGGLE_EXCHANGE,
});

const setMarketPair = pair => ({
  payload: pair,
  type: types.SET_MARKET_PAIR,
});

const initialBookFetching = pair => ({
  type: types.INITIAL_BOOK_FETCHING,
});

const initialBookFetchingSuccess = book => ({
  payload: book,
  type: types.INITIAL_BOOK_FETCHING_SUCCESS,
});

const initialBookFetchingFail = msg => ({
  payload: msg,
  type: types.INITIAL_BOOK_FETCHING_FAIL,
});

const setAutoUpdateInterval = intervalObj => ({
  payload: intervalObj,
  type: types.SET_AUTO_UPDATE_INTERVAL,
});

const fetchBook = () => ({
  type: types.FETCH_BOOK,
});

const fetchBookSuccess = book => ({
  payload: book,
  type: types.FETCH_BOOK_SUCCESS,
});

const fetchBookFail = msg => ({
  payload: msg,
  type: types.FETCH_BOOK_FAIL,
});

export default {
  getSupportedExchanges,
  getSupportedExchangesSuccess,
  getSupportedExchangesFail,
  toggleExchange,
  setMarketPair,
  initialBookFetching,
  initialBookFetchingSuccess,
  initialBookFetchingFail,
  setAutoUpdateInterval,
  fetchBook,
  fetchBookSuccess,
  fetchBookFail,
}
