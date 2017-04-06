const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('./passport.js')
const router = require('./resources/router.js')
const config = require('./config/index.js')

const app = express()

app.use(bodyParser.json())
app.use(cors(config.cors))
app.use(session(config.session))
app.use(passport.initialize())
app.use(passport.session())

app.options('*', cors(config.cors))
app.use('/', router)

module.exports = app
