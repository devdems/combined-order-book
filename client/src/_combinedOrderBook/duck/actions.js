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
})

export default {
  getSupportedExchanges,
  getSupportedExchangesSuccess,
  getSupportedExchangesFail,
  toggleExchange,
  setMarketPair,
}
