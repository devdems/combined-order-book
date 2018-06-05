import types from './types'

const initialState = {
  fetchingExchanges: false,
  exchanges: [],
  activeExchanges: {},
  currentMarket: '',
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SUPPORTED_EXCHANGES: {
      return Object.assign({}, state, {
        fetchingExchanges: true,
      })
    }
    case types.GET_SUPPORTED_EXCHANGES_SUCCESS: {
      return Object.assign({}, state, {
        fetchingExchanges: false,
        exchanges: action.payload,
      })
    }
    case types.GET_SUPPORTED_EXCHANGES_FAIL: {
      return Object.assign({}, state, {
        fetchingExchanges: false,
        exchanges: action.payload,
      })
    }
    default: return state
  }
}
