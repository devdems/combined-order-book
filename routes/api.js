const router = new require('express').Router()

router.use('/hello', (req, res) => res.send('hello'));

module.exports = router
