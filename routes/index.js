const router = require('express').Router();

router.use('/get-order-books', require('./get-order-books'));
router.use('/get-supported-exchanges', require('./get-supported-exchanges'));

module.exports = router;
