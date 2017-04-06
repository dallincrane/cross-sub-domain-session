require('dotenv').config()

const knex = require('../knex.js')

function success(text) {
  console.log(text)
  process.exit(0)
}

function exit(text) {
  if (text instanceof Error) {
    console.error(text.stack)
  } else {
    console.error(text)
  }

  process.exit(1)
}

knex.migrate.latest()
  .then(function(info) {
    const [batchNo, log] = info

    if (log.length === 0) {
      success('migrations up to date')
    }

    success(
      `migrations batch ${batchNo} run: ${log.length} migrations \n` +
      log.join('\n')
    )
  })
  .catch(exit)
