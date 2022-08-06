import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'

import { store } from 'store/store'

import App from './App'

import { GlobalStyle } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)
