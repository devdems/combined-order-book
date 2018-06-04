const router = require('express').Router();
const api = require('./api/binanceAPI');
const standardize = require('./util/standardizeOrderBooks').binance

router.get('/', (req, res) => res.send('binance'));
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {

  const market = (
    req.query.market &&
      req.query.market.split('-').reverse().join('').toUpperCase()
  ) || 'ETHBTC';

  let response;

  try {
    response = await api.getOrderBook(market);

    const orderBook = standardize(response)

    res.send(orderBook);

  } catch(err) {
    res.status(400).send(response.statusText);
  }

}

module.exports = router;
