const router = require('express').Router()
const load = require('../utils/load')

router.post('/', load('handler', 'sign_in'))

module.exports = router