import axios from 'axios'
import actions from './actions'

const fetchSupportedExchanges = () => {
  return dispatch => {
    dispatch(actions.getSupportedExchanges())
    return axios.get('/api/get-supported-exchanges')
      .then(res => {
        const { data } = res;
        const activeExchanges = data.reduce((obj, ex) => {
          obj[ex] = false;
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

const {
  toggleExchange,
  setMarketPair,
} = actions;

export default {
  fetchSupportedExchanges,
  toggleExchange,
  setMarketPair,
};
