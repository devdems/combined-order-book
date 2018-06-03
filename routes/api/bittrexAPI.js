const axios = require('axios');

module.exports = {
  getOrderBook: (market) => axios.get(
    `https://bittrex.com/api/v1.1/public/getorderbook?market=${market}&type=both`
  ).then(res => res.data).catch(res => res),
}
