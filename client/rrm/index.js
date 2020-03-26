import io from 'socket.io-client'
import { port } from '../../retranslator/constants'
import chatListView from '../../common/reactive-read-models/chat-list.view-projection'

// Embedding
const models = {
  'chat-list': chatListView
}
// Embedding

export const connect = (view, model, id, onViewUpdated) => {
  const socket = io(`http://localhost:${port}`, {
    query: {
      model,
      id
    }
  })
  let capturedView = view

  socket.on('connect', () => {
    console.log(`connected to ${model}:${id}`)
    socket.on('update-model', msg => {
      const { handler, payload } = JSON.parse(msg)

      capturedView = models[model][handler](capturedView, payload)

      onViewUpdated(capturedView)
    })
  })

  return {
    socket
  }
}

export const dispose = conn => {}
