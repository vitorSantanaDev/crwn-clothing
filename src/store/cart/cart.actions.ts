import { CART_ACTIONS_TYPES } from './cart.types'

import { ICategoryItem, CartItem } from 'interfaces'

import { createAction, withMatcher, ActionWithPayload } from 'utils'

type SetIsCartOpenType = ActionWithPayload<
  CART_ACTIONS_TYPES.SET_CART_IS_OPEN,
  boolean
>

type SetCartItemsType = ActionWithPayload<
  CART_ACTIONS_TYPES.SET_CART_ITEMS,
  CartItem[]
>

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItemsType =>
    createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems)
)

export const setIsCartOpen = withMatcher(
  (value: boolean): SetIsCartOpenType => {
    return createAction(CART_ACTIONS_TYPES.SET_CART_IS_OPEN, value)
  }
)

function addCartItems(
  cartItems: CartItem[],
  productToAdd: ICategoryItem
): CartItem[] {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  )
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

function removeCartItem(
  cartItems: CartItem[],
  cartItemToRemove: ICategoryItem
): CartItem[] {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

function clearCartItem(
  cartItems: CartItem[],
  cartItemToRemove: ICategoryItem
): CartItem[] {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
}

export function addItemsToCart(
  cartItems: CartItem[],
  productToAdd: ICategoryItem
) {
  const newCartItems = addCartItems(cartItems, productToAdd)
  return setCartItems(newCartItems)
}

export function removeItemFromCart(
  cartItems: CartItem[],
  productToRemove: ICategoryItem
) {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}

export function clearItemFromCart(
  cartItems: CartItem[],
  productToRemove: ICategoryItem
) {
  const newCartItems = clearCartItem(cartItems, productToRemove)
  return setCartItems(newCartItems)
}
