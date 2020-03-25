import { CHAT_OPENED, CHAT_CLOSED, CHAT_USER_JOINED, CHAT_USER_LEAVED } from '../chat_events'

export default {
  Init: () => ({
    isOpened: false,
    members: []
  }),
  [CHAT_OPENED]: state => ({
    ...state,
    isOpened: true
  }),
  [CHAT_CLOSED]: state => ({
    ...state,
    isOpened: false
  }),
  [CHAT_USER_JOINED]: (state, { user }) => ({
    ...state,
    members: state.members.concat(user)
  }),
  [CHAT_USER_LEAVED]: (state, { user }) => ({
    ...state,
    members: state.members.filter(member => member !== user)
  })
}
