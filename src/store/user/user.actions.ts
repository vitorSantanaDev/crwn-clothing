import { createAction } from 'utils'
import { USER_INITIAL_STATE } from './user.reducer'

import { USER_ACTION_TYPES } from './user.types'

export const setUser = (user: any) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)

export const resetUser = () =>
  createAction(USER_ACTION_TYPES.RESET_CURRENT_USER, USER_INITIAL_STATE)

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)

export const emailSignInStart = (payload: any) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { ...payload })

export const signInSuccess = (user: any) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)

export const signInFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName
  })

export const signUpSucess = ({ user, additionalDetails }: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })

export const signUpFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)

export const signOutStart = () => createAction(USER_ACTION_TYPES.SIGN_OUT_START)

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)

export const signOutFailed = (error: any) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
