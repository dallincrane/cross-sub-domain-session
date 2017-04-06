const bcrypt = require('bcryptjs')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')

const knex = require('./knex.js')

const localStrategyConfig = {
  usernameField: 'email',
  passwordField: 'password'
}

passport.use(new LocalStrategy(localStrategyConfig, (email, password, done) => {
  knex('person')
    .where({ email })
    .select('id', 'name', 'email', 'email_validated', 'password')
    .then(result => {
      const person = result[0]
      if (!person || !bcrypt.compareSync(password, person.password)) {
        return done(null, false)
      }
      delete person.password
      done(null, person)
    })
    .catch(err => done(err))
}))

passport.deserializeUser((id, done) => {
  knex('person')
    .where({ id })
    .select('id', 'name', 'email', 'email_validated')
    .then(result => done(null, result[0]))
    .catch(err => done(err))
})

passport.serializeUser((user, done) => {
  done(null, user.id)
})

module.exports = passport
