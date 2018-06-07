const router = require('express').Router();
const api = require('./api');
const standardize = require('./util/standardizeOrderBooks');
const translateMarket = require('./util/translateMarketSyntax');
const combineBooks = require('./util/combineBooks');

router.get('/', getOrderBooks);

async function getOrderBooks(req, res) {

  if (!req.query.exchanges) return res.status(400).send('No exhanges selected');

  const market = req.query.market || 'BTC-ETH';

  const exchanges = req.query.exchanges.split(',').filter(ex =>
    Object.keys(api).includes(ex)
  );

  let books = {};

  for (exchange of exchanges) {
    try {
      const translatedMarket = translateMarket[exchange](market);
      const response = await api[exchange].getOrderBook(translatedMarket);
      const orderBook = standardize[exchange](response);
      books[exchange] = orderBook;
    } catch(err) {
      books[exchange] = ({ err });
    }
  }

  const combinedBook = combineBooks(books);

  res.send(combinedBook);
}

module.exports = router;
