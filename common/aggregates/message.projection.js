import { MESSAGE_CREATED, MESSAGE_REMOVED } from '../message_events'

export default {
  Init: () => ({
    isExist: false
  }),
  [MESSAGE_CREATED]: (state, { chat }) => ({
    ...state,
    isExist: true,
    chat
  }),
  [MESSAGE_REMOVED]: state => ({
    ...state,
    isExist: false
  })
}
