const router = require('express').Router()
const api = require('../api/binanceAPI')

router.get('/', (req, res) => res.send('binance'))
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {
  const market = (
    req.query.market && req.query.market.split('-').reverse().join('').toUpperCase()
  ) || 'ETHBTC'
  const response = await api.getOrderBook(market)
  if (response.msg) res.status(400).send(response.msg)
  res.send(response)
}

module.exports = router
