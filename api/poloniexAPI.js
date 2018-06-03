const axios = require('axios');

module.exports = {
  getOrderBook: (market) => axios.get(
    `https://poloniex.com/public?command=returnOrderBook&currencyPair=${market}`
  ).then(res => res.data)
}
