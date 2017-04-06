const express = require('express')

const controller = require('./auth.controller.js')

const router = express.Router()

router.get('/logout', controller.logout)
router.post('/login', controller.login)

module.exports = router
