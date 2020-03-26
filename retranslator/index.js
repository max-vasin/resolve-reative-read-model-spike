const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const parser = require('body-parser')
const { port } = require('./constants')

const getRoom = (model, id) => `${model}-${id}`

app.use(parser.json())
app.post('/', (req, res) => {
  const { model, id, handler, payload } = req.body

  if (!model || !id) {
    res.status(400)
    res.send(`model ${model}, id ${id} - something is missing`)
    return
  }

  const room = getRoom(model, id)
  const notification = 'update-model'
  console.log(`posting ${notification} to ${room}`)
  io.to(room).emit(
    notification,
    JSON.stringify({
      handler,
      payload
    })
  )

  res.end('delivered')
})

io.use((socket, next) => {
  const { model, id } = socket.handshake.query

  if (!model || !id) {
    return next(Error(`model ${model}, id ${id} - something is missing`))
  }

  return next()
})

io.on('connection', socket => {
  const { model, id } = socket.handshake.query

  const room = getRoom(model, id)
  socket.join(room, () => {
    console.log(`a client connected to ${room}`)
  })
})

http.listen(port, () => {
  console.log(`re-translator started on ${port}`)
})
