exports.development = {
  debug: false,
  connection: {
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: 'example_development'
  },
  client: 'pg',
  pool: {
    min: 2,
    max: 10,
    afterCreate(conn, done) {
      conn.query('SET timezone="UTC";', (err) => done(err, conn))
    }
  }
}

exports.production = {
  connection: {
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PASSWORD || '',
    database: 'example_production'
  },
  client: 'pg',
  pool: {
    min: 2,
    max: 10,
    afterCreate(conn, done) {
      conn.query('SET timezone="UTC";', (err) => done(err, conn))
    }
  }
}
