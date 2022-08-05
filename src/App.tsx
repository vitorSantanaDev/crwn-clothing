import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RoutesApp from 'routes/index.routes'

import {
  createUserDocumentFromAuth,
  getCategoriesAndDocuments,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    ;(async () => {
      const categoriesArray = await getCategoriesAndDocuments()
      dispatch(categoriesActions.setCategories(categoriesArray))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <RoutesApp />
    </Fragment>
  )
}

export default App
