const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const router = require('./router')
const {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
} = require('./users')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(router)

io.on('connection', (socket) => {
  console.log('new connection')

  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      name,
      room,
    })

    if (error) {
      return callback(error)
    }

    socket.join(user.room)
  })

  socket.on('disconnect', () => {
    console.log('user left')
  })
})

server.listen(PORT, () =>
  console.log(`Server working on port ${PORT}`)
)
