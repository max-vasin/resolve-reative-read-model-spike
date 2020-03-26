import io from 'socket.io-client'
import { port } from '../../retranslator/constants'

export const connect = (model, id, cb) => {
  const socket = io(`http://localhost:${port}`, {
    query: {
      model,
      id
    }
  })
  socket.on('connect', () => {
    console.log(`connected to ${model}:${id}`)
    socket.on('update-model', msg => console.log(msg))
  })

  return {
    socket,
    cb
  }
}

export const dispose = conn => {}
