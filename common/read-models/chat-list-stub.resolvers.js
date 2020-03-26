export default {
  rrm: async store => {
    const entry = await store.findOne('chat-list-views', { id: 'all' })
    if (entry) {
      return entry.view
    }
    return null
  }
}
