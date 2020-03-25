import { USER_CREATED, USER_DESTROYED } from '../user_events'

export default {
  Init: () => ({
    isExist: false,
    name: 'NOT EXIST'
  }),
  [USER_CREATED]: (state, { payload }) => {
    // Payload can be null only if decryption was failed
    if (payload != null) {
      return {
        ...state,
        isExist: true
      }
    }
    return state
  },
  [USER_DESTROYED]: (state, { payload }) => {
    // Payload can be null only if decryption was failed
    if (payload != null) {
      /* do things */
    }
    return state
  }
}
