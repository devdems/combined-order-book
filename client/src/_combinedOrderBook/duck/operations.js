import axios from 'axios'
import actions from './actions'

const fetchSupportedExchanges = () => {
  return dispatch => {
    dispatch(actions.getSupportedExchanges())
    return axios.get('/api/get-supported-exchanges')
      .then(res => {
        const activeExchanges = res.data.reduce((obj, ex) => {
          obj[ex] = true;
          return obj;
        }, {})
        dispatch(actions.getSupportedExchangesSuccess(activeExchanges))
      })
      .catch(res => {
        const status = res.response.status;
        dispatch(actions.getSupportedExchangesFail(status));
      });
  }
}

const fetchBooks = () => {
  return (dispatch, getState) => {
    dispatch(actions.initialBookFetching())
    const state = getState().combinedOrderBook
    console.log(state);
    const market = state.marketPair.join('-');
    const exchanges = state.exchanges.filter(ex =>
      state.activeExchanges[ex]
    ).join(',');
    const baseUrl = './api/get-order-books';
    const url = `${baseUrl}?market=${market}&exchanges=${exchanges}`;
    return axios.get(url)
      .then(res => {
        console.log('then', res);
      })
      .catch(res => {
        console.log('catch', res);
      })
  }
}

const {
  toggleExchange,
  setMarketPair,
} = actions;

export default {
  fetchSupportedExchanges,
  toggleExchange,
  setMarketPair,
  fetchBooks,
};
