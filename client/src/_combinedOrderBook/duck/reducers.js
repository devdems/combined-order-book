import types from './types';

const initialState = {
  fetchingExchanges: false,
  exchanges: [],
  activeExchanges: {},
  currentMarket: '',
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SUPPORTED_EXCHANGES: {
      return Object.assign({}, state, {
        fetchingExchanges: true,
      });
    }
    case types.GET_SUPPORTED_EXCHANGES_SUCCESS: {
      const activeExchanges = action.payload.reduce((obj, ex) => {
        obj[ex] = false;
        return obj;
      }, {})
      return Object.assign({}, state, {
        activeExchanges,
        exchanges: action.payload,
        fetchingExchanges: false,
      });
    }
    case types.GET_SUPPORTED_EXCHANGES_FAIL: {
      return Object.assign({}, state, {
        fetchingExchanges: false,
        exchanges: action.payload,
      });
    }
    case types.TOGGLE_EXCHANGE: {
      const activeExchanges = { ...state.activeExchanges}
      activeExchanges[action.payload] = !state.activeExchanges[action.payload]
      return Object.assign({}, state, {
        activeExchanges,
      })
    }
    default: return state
  }
}
