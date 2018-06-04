// helper for translating the standard market syntax to then
// format required by each exchange's API

module.exports = {
  poloniex: market => market.split('-').join('_').toUpperCase(),
  bittrex: market => market.toUpperCase(),
  binance: market => market.split('-').reverse().join('').toUpperCase(),
}
