import { MESSAGE_CREATED, MESSAGE_REMOVED } from '../message_events'
import { CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'
import { initDispatcher } from '../rrm'

export default {
  Init: async ({ store }) => initDispatcher(store, 'chat'),
  [CHAT_USER_JOINED]: async ({ store, dispatch }, { aggregateId, payload: { user } }) => {
    const { nickname } = await store.findOne('users', { id: user })
    await dispatch(aggregateId, CHAT_USER_JOINED, {
      user,
      nickname
    })
  },
  [CHAT_USER_LEAVED]: async ({ dispatch }, { aggregateId, payload: { user } }) => {
    await dispatch(aggregateId, CHAT_USER_LEAVED, {
      user
    })
  },
  [MESSAGE_CREATED]: async ({ store, dispatch }, { aggregateId, payload: { chat, user, text } }) => {
    const { nickname } = await store.findOne('users', { id: user })
    await dispatch(chat, MESSAGE_CREATED, {
      id: aggregateId,
      user,
      nickname,
      text
    })
  },
  [MESSAGE_REMOVED]: async ({ dispatch }, { aggregateId, payload: { chat } }) => {
    await dispatch(chat, MESSAGE_REMOVED, {
      id: aggregateId
    })
  }
}

/*
dispatch((scope, event) => {
  const { state } = await store.findOne('views', { scope })
  const updatedView = projection(state, event)
  await store.update('views', { scope, state })
  await
})
*/
