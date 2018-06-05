import actions from './actions'

const getSupportedExchanges = () => ({
  type: actions.GET_SUPPORTED_EXCHANGES,
})

const getSupportedExchangesSuccess = (exchanges) => ({
  payload: exchanges,
  type: actions.GET_SUPPORTED_EXCHANGES_SUCCESS,
})

const getSupportedExchangesFail = (msg) => ({
  payload: msg,
  type: actions.GET_SUPPORTED_EXCHANGES_FAIL,
})

export default {
  getSupportedExchanges,
  getSupportedExchangesSuccess,
  getSupportedExchangesFail,
}
