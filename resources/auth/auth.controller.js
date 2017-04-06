const passport = require('../../passport.js')

exports.logout = (req, res) => {
  req.logout()
  res.status(204).send()
}

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) { return res.status(403).send() }
    req.logIn(user, function(err) {
      if (err) { return next(err) }
      return res.status(204).send()
    })
  })(req, res, next)
}
