import { createAction } from 'utils'

import { USER_ACTION_TYPES } from './user.types'

export const setUser = (user: any) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
