import types from './types'

const getSupportedExchanges = () => ({
  type: types.GET_SUPPORTED_EXCHANGES,
})

const getSupportedExchangesSuccess = exchanges => ({
  payload: exchanges,
  type: types.GET_SUPPORTED_EXCHANGES_SUCCESS,
})

const getSupportedExchangesFail = msg => ({
  payload: msg,
  type: types.GET_SUPPORTED_EXCHANGES_FAIL,
})

const toggleExchange = exchange => ({
  payload: exchange,
  type: types.TOGGLE_EXCHANGE,
})

export default {
  getSupportedExchanges,
  getSupportedExchangesSuccess,
  getSupportedExchangesFail,
  toggleExchange,
}
