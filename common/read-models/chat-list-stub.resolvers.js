import connector from '../reactive-read-models/chat-list.connector'

export default {
  rrm: async store => {
    const entry = await store.findOne('chat-list-views', { id: 'all' })
    if (entry) {
      return entry.view
    }
    return null
  },
  connect: async (store, { id }, jwt) => connector(store, id, jwt)
}
