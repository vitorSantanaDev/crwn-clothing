import { AnyAction } from 'redux'

import { CartItem } from 'interfaces'

import { setCartItems, setIsCartOpen } from './cart.actions'

export type CartStateType = {
  isCartOpen: boolean
  cartItems: CartItem[]
}

export const CART_INITIAL_STATE: CartStateType = {
  isCartOpen: false,
  cartItems: []
}

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action = {} as AnyAction
): CartStateType => {
  if (setCartItems.match(action)) {
    return { ...state, cartItems: action.payload }
  }
  if (setIsCartOpen.match(action)) {
    return { ...state, isCartOpen: action.payload }
  }

  return state
}
