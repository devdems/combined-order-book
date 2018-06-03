const router = require('express').Router()
const api = require('../api/poloniexAPI')

router.get('/', (req, res) => res.send('poloniex'))
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {
  const market = (
    req.query.market && req.query.market.split('-').join('_').toUpperCase()
  ) || 'BTC_ETH'
  const response = await api.getOrderBook(market)
  if (response.error) res.status(400).send(response.error)
  res.send(response)
}

module.exports = router
