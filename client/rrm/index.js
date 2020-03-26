import io from 'socket.io-client'
import { port } from '../../retranslator/constants'

export const connect = cb => {
  const socket = io(`http://localhost:${port}`)
  socket.on('broadcast', data => cb(data))

  return {
    socket,
    cb
  }
}

export const dispose = conn => {}
