import types from './types'

const getSupportedExchanges = () => ({
  type: types.GET_SUPPORTED_EXCHANGES,
})

const getSupportedExchangesSuccess = (exchanges) => ({
  payload: exchanges,
  type: types.GET_SUPPORTED_EXCHANGES_SUCCESS,
})

const getSupportedExchangesFail = (msg) => ({
  payload: msg,
  type: types.GET_SUPPORTED_EXCHANGES_FAIL,
})

export default {
  getSupportedExchanges,
  getSupportedExchangesSuccess,
  getSupportedExchangesFail,
}
