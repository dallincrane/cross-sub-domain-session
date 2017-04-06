const knex = require('knex')
const config = require('./config/index.js')

const knexInstance = knex(config.knex)

module.exports = knexInstance
