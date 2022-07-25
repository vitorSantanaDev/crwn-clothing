/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, ReactNode, useEffect, useReducer } from 'react'

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListiner
} from 'services/firebase'

import { createAction } from 'utils'

const USER_INITIAL_STATE: { user: any; setUser: any } = {
  user: null,
  setUser: null
}

export const UserContext = createContext<{
  user: any
  setUser: any
}>(USER_INITIAL_STATE)

export interface UserContextProviderTypes {
  children: ReactNode
}

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: `SET_CURRENT_USER`
}

const userReducer = (state = USER_INITIAL_STATE, action: any) => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER: {
      return { ...state, user: payload }
    }

    default: {
      throw new Error(`unhandled type ${type} in userReducer`)
    }
  }
}

export function UserContextProvider({ children }: UserContextProviderTypes) {
  const [{ user }, dispatch] = useReducer(userReducer, USER_INITIAL_STATE)

  const setUser = (user: any) =>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))

  useEffect(() => {
    onAuthStateChangedListiner((user) => {
      if (user) createUserDocumentFromAuth(user)
      setUser(user)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
