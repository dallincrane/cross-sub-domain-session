exports.development = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true
}

exports.production = {
  origin: /\.example\.com$/,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  credentials: true
}
