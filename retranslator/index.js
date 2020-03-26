const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const { port } = require('./constants')

app.post('/', (req, res) => {
  console.log(req)
})

io.set('authorization', (handshake, callback) => {
  callback(null, true)
})

io.on('connection', socket => {
  console.log('connected')
})

http.listen(port, () => {
  console.log(`re-translator started on ${port}`)
})
