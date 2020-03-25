import { USER_CREATED, USER_DESTROYED } from '../user_events'

export default {
  create: ({ isExist }, { aggregateId, payload: { firstName, lastName, phoneNumber } }, { confine }) => {
    if (isExist) {
      throw Error(`user already exists`)
    }

    return confine(aggregateId, {
      type: USER_CREATED,
      payload: {
        firstName,
        lastName,
        phoneNumber
      }
    })
  },
  destroy: ({ isExist }, { aggregateId, payload: { firstName, lastName, phoneNumber } }, { confine }) => {
    if (!isExist) {
      throw Error(`user not exist`)
    }

    return confine(aggregateId, {
      type: USER_DESTROYED,
      payload: {
        firstName,
        lastName,
        phoneNumber
      }
    })
  }
}
