import axios from 'axios'
import actions from './actions'

const fetchSupportedExchanges = () => {
  return dispatch => {
    dispatch(actions.getSupportedExchanges())
    axios.get('./api/get-supported-exchanges')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  fetchSupportedExchanges,
}
