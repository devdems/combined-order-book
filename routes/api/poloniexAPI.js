const axios = require('axios');

// API methods for interacting with Poloniex

module.exports = {
  getOrderBook: (market) => axios.get(
    `https://poloniex.com/public?command=returnOrderBook&currencyPair=${market}`
  ).then(res => res.data).catch(res => res),
};
