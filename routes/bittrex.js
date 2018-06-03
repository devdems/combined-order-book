const router = require('express').Router()

router.get('/', (req, res) => res.send('bittrex'))
router.get('/getorderbook', getOrderBook);

function getOrderBook(req, res) {
  res.send(req.query);
}

module.exports = router
