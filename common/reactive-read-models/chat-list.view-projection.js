import { CHAT_OPENED, CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'

export default {
  Init: () => ({
    chats: []
  }),
  [CHAT_OPENED]: (state, { chat, topic }) => ({
    ...state,
    chats: state.chats.concat({ id: chat, topic: topic || 'no topic', userCount: 1 })
  }),
  [CHAT_CLOSED]: (state, { chat }) => ({
    ...state,
    chats: state.chats.filter(({ id }) => chat !== id)
  }),
  [CHAT_USER_JOINED]: (state, { chat }) => {
    const entry = state.chats.find(({ id }) => id === chat)
    entry.userCount++
    return {
      ...state
    }
  },
  [CHAT_USER_LEAVED]: (state, { chat }) => {
    const entry = state.chats.find(({ id }) => id === chat)
    entry.userCount--
    return {
      ...state
    }
  }
}
