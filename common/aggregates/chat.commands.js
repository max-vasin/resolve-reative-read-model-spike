import { CHAT_OPENED, CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'

export default {
  open: ({ isOpened }, { payload: { topic } }) => {
    if (isOpened) {
      throw Error(`the chat already opened`)
    }

    return {
      type: CHAT_OPENED,
      payload: {
        topic
      }
    }
  },
  close: ({ isOpened }) => {
    if (!isOpened) {
      throw Error(`chat not exist or closed`)
    }

    return {
      type: CHAT_CLOSED,
      payload: {}
    }
  },
  join: ({ isOpened, members }, { payload: { user } }) => {
    if (!isOpened) {
      throw Error(`chat not exist or closed`)
    }

    if (!members.includes(user)) {
      return {
        type: CHAT_USER_JOINED,
        payload: {
          user
        }
      }
    }
    return null
  },
  leave: ({ isOpened, users }, { payload: { user } }) => {
    if (!isOpened) {
      throw Error(`chat not exist or closed`)
    }

    if (users.includes(user)) {
      return {
        type: CHAT_USER_LEAVED,
        payload: {
          user
        }
      }
    }
    return null
  }
}
