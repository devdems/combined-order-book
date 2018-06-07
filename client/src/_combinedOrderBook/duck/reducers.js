import types from './types';

const initialState = {
  fetchingExchanges: false,
  exchanges: [],
  activeExchanges: {},
  marketPair: ['BTC', 'ETH'],
  autoUpdateIntervalObj: '',
  intialFetching: false,
  fetching: false,
  fetchFailedCount: 0,
  fetchFailed: false,
  fetchFailedMsg: '',
  book: [],
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.GET_SUPPORTED_EXCHANGES: {
      return Object.assign({}, state, {
        fetchingExchanges: true,
      });
    }
    case types.GET_SUPPORTED_EXCHANGES_SUCCESS: {
      return Object.assign({}, state, {
        activeExchanges: action.payload,
        exchanges: Object.keys(action.payload),
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
      });
    }
    case types.SET_MARKET_PAIR: {
      return Object.assign({}, state, {
        marketPair: action.payload,
      });
    }
    case types.INITIAL_BOOK_FETCHING: {
      return Object.assign({}, state, {
        initialBookFetching: true,
        fetchFailedCount: 0,
        fetchFailed: false,
        fetchFailedMsg: '',
        autoUpdateIntervalObj: '',
      });
    }
    case types.INITIAL_BOOK_FETCHING_SUCCESS: {
      return Object.assign({}, state, {
        initialBookFetching: false,
        book: action.payload,
      });
    }
    case types.INITIAL_BOOK_FETCHING_FAIL: {
      return Object.assign({}, state, {
        initialBookFetching: false,
        fetchFailed: true,
        fetchFailedMsg: action.payload,
      });
    }
    case types.SET_AUTO_UPDATE_INTERVAL: {
      return Object.assign({}, state, {
        autoUpdateIntervalObj: action.payload,
      });
    }
    case types.FETCH_BOOK: {
      return Object.assign({}, state, {
        fetching: true,
      });
    }
    case types.FETCH_BOOK_SUCCESS: {
      return Object.assign({}, state, {
        fetching: false,
        book: action.payload,
      });
    }
    case types.FETCH_BOOK_FAIL: {
      return Object.assign({}, state, {
        fetching: false,
        book: action.payload,
      });
    }
    default: return state
  }
}
