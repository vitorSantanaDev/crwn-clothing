import { Action } from 'redux'
import { CART_ACTIONS_TYPES } from './cart.types'

import { createAction } from 'utils'
import { IProduct, IProductCartItem } from 'interfaces'

function addCartItems(
  cartItems: IProductCartItem[],
  productToAdd: IProduct
): IProductCartItem[] {
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
  cartItems: IProductCartItem[],
  cartItemToRemove: IProduct
): IProductCartItem[] {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

function clearCartItem(
  cartItems: IProductCartItem[],
  cartItemToRemove: IProduct
): IProductCartItem[] {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
}

export function addItemsToCart(
  cartItems: IProductCartItem[],
  productToAdd: IProduct
): Action {
  const newCartItems = addCartItems(cartItems, productToAdd)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export function removeItemFromCart(
  cartItems: IProductCartItem[],
  productToRemove: IProduct
): Action {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export function clearItemFromCart(
  cartItems: IProductCartItem[],
  productToRemove: IProduct
): Action {
  const newCartItems = clearCartItem(cartItems, productToRemove)
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export function setIsCartOpen(value: boolean): Action {
  return createAction(CART_ACTIONS_TYPES.SET_CART_IS_OPEN, value)
}
