const router = require('express').Router()

router.use('/bittrex', require('./bittrex'));
router.use('/poloniex', require('./poloniex'));
router.use('/binance', require('./binance'));
router.use('/get-order-books', require('./get-order-books'));
router.use('/get-supported-exchanges', require('./get-supported-exchanges'));

module.exports = router
