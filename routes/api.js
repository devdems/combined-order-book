const router = require('express').Router()

router.use('/hello', (req, res) => res.send('hello'));
router.use('/bittrex', require('./bittrex'))

module.exports = router
