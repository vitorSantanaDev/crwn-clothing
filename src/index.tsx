import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { UserContextProvider, ProductsProvider, CartProvider } from 'contexts'

import App from './App'
import { GlobalStyle } from 'styles/global'

import 'react-toastify/dist/ReactToastify.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsProvider>
        <CartProvider>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </CartProvider>
      </ProductsProvider>
    </UserContextProvider>
  </React.StrictMode>
)
