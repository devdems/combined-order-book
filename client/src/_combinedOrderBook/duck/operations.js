import axios from 'axios'
import actions from './actions'

const fetchSupportedExchanges = () => {
  return dispatch => {
    dispatch(actions.getSupportedExchanges())
    axios.get('./api/get-supported-exchanges')
      .then(res => {
        const { data } = res;
        dispatch(actions.getSupportedExchangesSuccess(data))
      })
      .catch(res => {
        const statusText = res.response.statusText;
        dispatch(actions.getSupportedExchangesFail(statusText))
      });
  }
}

export default {
  fetchSupportedExchanges,
}
