import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RoutesApp from 'routes/index.routes'

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListiner
} from 'services/firebase'

import { categoriesActions, userActions } from './store'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChangedListiner((user) => {
      if (user) createUserDocumentFromAuth(user)
      dispatch(userActions.setUser(user))
    })
  }, [dispatch])

  useEffect(() => {
    ;(async () => {
      await categoriesActions.fetchCategoriesAsync(dispatch)
    })()
  }, [dispatch])

  return (
    <Fragment>
      <RoutesApp />
    </Fragment>
  )
}

export default App
