import { MESSAGE_CREATED, MESSAGE_REMOVED } from '../message_events'

export default {
  create: ({ isExist }, { payload: { chat, user, text } }) => {
    if (isExist) {
      throw Error(`message already exists`)
    }

    return {
      type: MESSAGE_CREATED,
      payload: {
        chat,
        user,
        text
      }
    }
  },
  destroy: ({ isExist, chat }) => {
    if (!isExist) {
      throw Error(`message not exist`)
    }

    return {
      type: MESSAGE_REMOVED,
      payload: {
        chat
      }
    }
  }
}
