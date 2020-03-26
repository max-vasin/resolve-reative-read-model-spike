import projection from '../reactive-read-models/chat-list.projection'
import dispatcher from '../reactive-read-models/chat-list.dispatcher'
import viewProjection from '../reactive-read-models/chat-list.view-projection'
import { dispatch } from '../rrm'

import { CHAT_OPENED, CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'

export default {
  handlers: {
    Init: async ({ store }) => {
      await projection.Init(store)
      await dispatcher.Init({ store })
    },
    [CHAT_OPENED]: async ({ store }, event) => {
      await projection[CHAT_OPENED](store, event)
    },
    [CHAT_CLOSED]: async ({ store }, event) => {
      await projection[CHAT_CLOSED](store, event)
    },
    [CHAT_USER_JOINED]: async ({ store }, event) => {
      await projection[CHAT_USER_JOINED](store, event)
      await dispatcher[CHAT_USER_JOINED]({ store, dispatch: dispatch.bind(null, store, viewProjection) }, event)
    },
    [CHAT_USER_LEAVED]: async ({ store }, event) => {
      await projection[CHAT_USER_LEAVED](store, event)
      await dispatcher[CHAT_USER_LEAVED]({ store, dispatch: dispatch.bind(null, store, viewProjection) }, event)
    }
  }
}
