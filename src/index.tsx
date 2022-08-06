import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from 'store/store'

import App from './App'

import { GlobalStyle } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
