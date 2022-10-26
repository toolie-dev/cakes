const router = require('express').Router()
const load = require('../utils/load')

router.post('/', load('handler', 'register'))

module.exports = router