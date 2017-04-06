const express = require('express')

const authRouter = require('./auth/auth.router.js')
const personRouter = require('./person/person.router.js')

const router = express.Router()

router.use('/v1/auth', authRouter)
router.use('/v1/persons', personRouter)

module.exports = router
