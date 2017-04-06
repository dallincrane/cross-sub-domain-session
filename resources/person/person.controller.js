const bcrypt = require('bcryptjs')

const knex = require('../../knex.js')

exports.create = (req, res, next) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  if (!data.name || !data.email || !data.password) {
    const message = 'name, email, and password are required'
    return res.status(422).json({ message })
  }

  if (data.password) {
    data.password = hash(data.password)
  }

  knex('person')
    .insert(data)
    .then(() => res.status(204).send())
    .catch((err) => next(err))
}

exports.me = (req, res, next) => {
  if (!req.user) {
    const message = 'current user not defined'
    return res.status(403).json({ message })
  }

  const data = req.user
  res.status(200).json(data)
}

function hash(given) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(given, salt)
}
