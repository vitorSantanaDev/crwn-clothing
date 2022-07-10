import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import RoutesApp from 'routes/index.routes'
import { UserContextProvider } from 'contexts/UserContext'

function App() {
  return (
    <Fragment>
      <UserContextProvider>
        <RoutesApp />
        <ToastContainer />
      </UserContextProvider>
    </Fragment>
  )
}

export default App
