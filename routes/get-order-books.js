const router = require('express').Router();
const api = require('./api');
const standardize = require('./util/standardizeOrderBooks');
const translateMarket = require('./util/translateMarketSyntax');

router.get('/', getOrderBooks);

async function getOrderBooks(req, res) {

  const market = req.query.market || 'BTC-ETH';
  if (!req.query.exchanges) return res.status(400).send('No exhanges selected');

  const exchanges = req.query.exchanges.split(',').filter(ex =>
    Object.keys(api).includes(ex)
  );

  let combinedBook = {};

  for (exchange of exchanges) {
    try {
      const translatedMarket = translateMarket[exchange](market);
      const response = await api[exchange].getOrderBook(translatedMarket);
      const orderBook = standardize[exchange](response);
      combinedBook[exchange] = orderBook;
    } catch(err) {
      combinedBook[exchange] = ({ err });
    }
  }

  res.send(combinedBook);
}

module.exports = router;
