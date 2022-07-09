import React, { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import RoutesApp from 'routes/index.routes'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <Fragment>
      <RoutesApp />
      <ToastContainer />
    </Fragment>
  )
}

export default App
