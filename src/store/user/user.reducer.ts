import { USER_ACTION_TYPES } from './user.types'

export const USER_INITIAL_STATE: { user: any } = {
  user: null
}

export const userReducer = (state = USER_INITIAL_STATE, action: any) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return { ...state, user: payload }
    }

    default:
      return state
  }
}
