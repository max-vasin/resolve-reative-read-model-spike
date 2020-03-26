import { CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'
import { MESSAGE_CREATED, MESSAGE_REMOVED } from '../message_events'

export default {
  Init: () => ({
    closed: false,
    members: [],
    messages: []
  }),
  [MESSAGE_CREATED]: (state, { id, user, nickname, text }) => ({
    ...state,
    messages: state.messages.concat({
      id,
      user,
      nickname,
      text
    })
  }),
  [MESSAGE_REMOVED]: (state, { aggregateId }) => ({
    ...state,
    messages: state.messages.filter(msg => msg.id !== aggregateId)
  }),
  [CHAT_USER_JOINED]: (state, { payload: { user, nickname } }) => ({
    ...state,
    members: state.members.concat({ user, nickname })
  }),
  [CHAT_USER_LEAVED]: (state, { payload: { user } }) => ({
    ...state,
    members: state.members.filter(member => member.user !== user)
  }),
  [CHAT_CLOSED]: state => ({
    ...state,
    closed: true
  })
}
