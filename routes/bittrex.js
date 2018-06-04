const router = require('express').Router();
const api = require('./api/bittrexAPI');
const standardize = require('./util/standardizeOrderBooks').bittrex

router.get('/', (req, res) => res.send('bittrex'));
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {

  const market = (
    req.query.market && req.query.market.toUpperCase()
  ) || 'BTC-ETH';

  let response;

  try {
    response = await api.getOrderBook(market);
    if (!response.success) return res.status(400).send(response.message);
    const orderBook = standardize(response)
    res.send(orderBook);
  } catch(err) {
    res.status(404).send(err);
  }

}

module.exports = router;
