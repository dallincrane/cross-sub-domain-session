const knex = require('./knex.config.js')
const session = require('./session.config.js')
const cors = require('./cors.config.js')

const env = process.env.NODE_ENV

module.exports = {
  knex: knex[env],
  session: session[env],
  cors: cors[env]
}
