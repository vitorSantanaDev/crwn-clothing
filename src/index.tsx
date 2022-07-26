import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { CategoriesProvider, CartProvider } from 'contexts'
import { store } from 'store/store'

import { Provider } from 'react-redux'

import App from './App'

import { GlobalStyle } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoriesProvider>
        <CartProvider>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </CartProvider>
      </CategoriesProvider>
    </Provider>
  </React.StrictMode>
)
