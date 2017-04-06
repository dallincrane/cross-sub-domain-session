exports.development = {
  name: 'SID',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // one week
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}

exports.production = {
  name: 'SID',
  cookie: {
    domain: 'example.com',
    maxAge: 1000 * 60 * 60 * 24 * 7 // one week
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}
