import axios from 'axios'
import actions from './actions'

const fetchSupportedExchanges = () => {
  return dispatch => {
    dispatch(actions.getSupportedExchanges())
    return axios.get('/api/get-supported-exchanges')
      .then(res => {
        const { data } = res;
        dispatch(actions.getSupportedExchangesSuccess(data))
      })
      .catch(res => {
        const status = res.response.status;
        dispatch(actions.getSupportedExchangesFail(status));
      });
  }
}

const toggleExchange = exchange => {
  return dispatch => {
    dispatch(actions.toggleExchange(exchange));
  }
}

export default {
  fetchSupportedExchanges,
  toggleExchange,
};
