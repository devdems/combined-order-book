const router = require('express').Router()
const api = require('../api/binanceAPI')

router.get('/', (req, res) => res.send('binance'))
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {

  const market = (
    req.query.market && req.query.market.split('-').reverse().join('').toUpperCase()
  ) || 'ETHBTC'

  let response;
  try {
    response = await api.getOrderBook(market);
    res.send(response);
  } catch(err) {
    res.status(400).send(response.statusText)
  }
}

module.exports = router
