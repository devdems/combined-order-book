const axios = require('axios');

// API methods for interacting with Binance

module.exports = {
  getOrderBook: (market) => axios.get(
    `https://api.binance.com/api/v1/depth?symbol=${market}`
  ).then(res => res.data).catch(res => res.response),
}
