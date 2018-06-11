// helper for translating the standard market syntax to the
// format required by each exchange's API. The input is always
// formatted with a dash in between: `BTC-ETH`

module.exports = {
  poloniex: market => market.split('-').join('_').toUpperCase(),
  bittrex: market => market.toUpperCase(),
  binance: market => market.split('-').reverse().join('').toUpperCase(),
};
