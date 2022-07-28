import { createAction } from 'utils'
import { USER_INITIAL_STATE } from './user.reducer'

import { USER_ACTION_TYPES } from './user.types'

export const setUser = (user: any) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const resetUser = () =>
  createAction(USER_ACTION_TYPES.RESET_CURRENT_USER, USER_INITIAL_STATE)
