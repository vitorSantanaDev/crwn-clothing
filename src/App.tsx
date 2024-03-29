import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RoutesApp from 'routes/index.routes'

import { categoriesActions, userActions } from './store'

function App() {
  const dispatch = useDispatch()

  const changingUserAuthenticationState = () => {
    dispatch(userActions.checkUserSession())
  }

  const callingProductCategories = () => {
    dispatch(categoriesActions.fetchCategoriesStart())
  }

  useEffect(changingUserAuthenticationState, [dispatch])
  useEffect(callingProductCategories, [dispatch])

  return (
    <Fragment>
      <RoutesApp />
    </Fragment>
  )
}

export default App
