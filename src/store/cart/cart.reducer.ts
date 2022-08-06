import { CART_ACTIONS_TYPES } from './cart.types'

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action: any) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS: {
      return { ...state, cartItems: payload }
    }
    case CART_ACTIONS_TYPES.SET_CART_IS_OPEN: {
      return { ...state, isCartOpen: payload }
    }
    default: {
      return state
    }
  }
}
