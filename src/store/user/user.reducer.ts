import { USER_ACTION_TYPES } from './user.types'

export const USER_INITIAL_STATE: { user: any; isLoading: boolean; error: any } =
  {
    user: null,
    error: null,
    isLoading: false
  }

export const userReducer = (state = USER_INITIAL_STATE, action: any) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, user: payload }
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, user: null }
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload }

    default:
      return state
  }
}
