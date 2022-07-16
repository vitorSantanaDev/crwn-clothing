import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserContextProvider, CategoriesProvider, CartProvider } from 'contexts'

import App from './App'

import { GlobalStyle } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CategoriesProvider>
        <CartProvider>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </CartProvider>
      </CategoriesProvider>
    </UserContextProvider>
  </React.StrictMode>
)
