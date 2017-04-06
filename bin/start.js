require('dotenv').config()

const http = require('http')

const app = require('../app.js')

const server = http.createServer(app)
const port = process.env.PORT

server.listen(port)
server.on('listening', () => console.log(`listening on port: ${port}`))
