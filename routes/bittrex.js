const router = require('express').Router()
const api = require('../api/bittrexAPI')

router.get('/', (req, res) => res.send('bittrex'))
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {
  const market = (
    req.query.market && req.query.market.toUpperCase()
  ) || 'BTC-ETH'
  const response = await api.getOrderBook(market)
  if (!response.success) res.status(400).send(response.message)
  res.send(response.result)
}

module.exports = router
