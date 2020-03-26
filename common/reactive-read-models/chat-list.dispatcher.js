import { CHAT_USER_JOINED, CHAT_USER_LEAVED, CHAT_OPENED, CHAT_CLOSED } from '../chat_events'
import { initDispatcher } from '../rrm'

export default {
  Init: async ({ store }) => initDispatcher(store, 'chat-list'),
  [CHAT_OPENED]: async ({ dispatch }, { aggregateId, payload: { topic } }) => {
    await dispatch('all', CHAT_OPENED, { chat: aggregateId, topic})
  },
  [CHAT_CLOSED]: async ({ dispatch }, { aggregateId }) => {
    await dispatch('all', CHAT_CLOSED, { chat: aggregateId })
  },
  [CHAT_USER_JOINED]: async ({ dispatch }, { aggregateId }) => {
    await dispatch('all', CHAT_USER_JOINED, { chat: aggregateId })
  },
  [CHAT_USER_LEAVED]: async ({ dispatch }, { aggregateId }) => {
    await dispatch('all', CHAT_USER_LEAVED, { chat: aggregateId })
  }
}
