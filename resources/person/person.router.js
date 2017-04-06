const express = require('express')

const passport = require('../../passport.js')
const controller = require('./person.controller.js')

const router = express.Router()

router.post('/', controller.create)
router.get('/me', controller.me)

module.exports = router
