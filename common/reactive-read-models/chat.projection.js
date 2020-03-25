import {} from '../message_events'
import { CHAT_OPENED, CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'
import { USER_CREATED } from '../user_events'

export default {
  Init: async store => {
    await store.defineTable('chats', {
      indexes: { id: 'string' },
      fields: ['topic', 'members']
    })
    await store.defineTable('users', {
      indexes: { id: 'string' },
      fields: ['nickname']
    })
  },
  [CHAT_OPENED]: async (store, { aggregateId, payload: { topic } }) => {
    await store.insert('chats', {
      id: aggregateId,
      topic,
      members: []
    })
  },
  [CHAT_CLOSED]: async (store, { aggregateId }) => {
    await store.delete('chats', {
      id: aggregateId
    })
  },
  [CHAT_USER_JOINED]: async (store, { aggregateId, payload: { user } }) => {
    const chat = await store.findOne('chats', { id: aggregateId })
    await store.update('chats', { id: aggregateId }, { $set: { members: chat.members.concat(user) } })
  },
  [CHAT_USER_LEAVED]: async (store, { aggregateId, payload: { user } }) => {
    const chat = await store.findOne('chats', { id: aggregateId })
    await store.update(
      'chats',
      { id: aggregateId },
      { $set: { members: chat.members.filter(member => member !== user) } }
    )
  },
  [USER_CREATED]: async (store, { aggregateId, payload: { firstName, lastName } }) => {
    await store.insert('users', {
      id: aggregateId,
      nickname: `${firstName} ${lastName}`
    })
  }
}
