import React, { createContext, ReactNode, useState, useEffect } from 'react'
import { UserCredential } from 'firebase/auth'

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListiner
} from 'services/firebase'

const initialState = {
  user: null,
  setUser: null
}

export const UserContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: any
}>(initialState)

export interface UserContextProviderTypes {
  children: ReactNode
}

export function UserContextProvider({ children }: UserContextProviderTypes) {
  const [user, setUser] = useState<UserCredential>()

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
