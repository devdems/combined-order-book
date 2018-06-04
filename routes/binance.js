const router = require('express').Router();
const api = require('./api/binanceAPI');
const standardize = require('./util/standardizeOrderBooks').binance
const translateMarket = require('./util/translateMarketSyntax').binance

router.get('/', (req, res) => res.send('binance'));
router.get('/get-order-book', getOrderBook);

async function getOrderBook(req, res) {

  const market = (
    req.query.market &&
      translateMarket(req.query.market)
  ) || 'ETHBTC';

  let response;

  try {
    response = await api.getOrderBook(market);
    const orderBook = standardize(response);
    res.send(orderBook);
  } catch(err) {
    res.status(400).send(response.statusText);
  }

}

module.exports = router;
