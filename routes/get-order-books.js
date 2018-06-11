const router = require('express').Router();
const api = require('./api');
const standardize = require('./util/standardizeResponseBooks');
const translateMarket = require('./util/translateMarketSyntax');
const combineBooks = require('./util/combineBooks');

router.get('/', getOrderBooks);

async function getOrderBooks(req, res) {

  // respond with 400 if exchanges not present on request
  if (!req.query.exchanges) {
    return res.status(400).send('No exhanges selected');
  }

  // use the market query param or set default if not present
  const market = req.query.market || 'BTC-ETH';

  // filter out any unsupported exchanges
  const exchanges = req.query.exchanges.split(',').filter(ex =>
    Object.keys(api).includes(ex)
  );

  let books = {};

  // request books from each exchange, using util functions to
  // format market for each API and to standardize the books
  // upon response
  for (exchange of exchanges) {
    try {
      const translatedMarket = translateMarket[exchange](market);
      const response = await api[exchange].getOrderBook(translatedMarket);
      const standardizedBook = standardize[exchange](response);
      books[exchange] = standardizedBook;
    } catch(err) {
      books[exchange] = ({ err });
    }
  }

  const combinedBook = combineBooks(books);

  res.send(combinedBook);
}

module.exports = router;
