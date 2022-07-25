/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useReducer } from 'react'

import { IProduct, IProductCartItem } from 'interfaces'
import { createAction } from 'utils'

export type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen?: any
  cartItems: IProductCartItem[]
  addItemsToCart?: (productToAdd: IProduct) => void
  removeItemFromCart?: (productToRemove: IProduct) => void
  clearItemFromCart?: (productToRemove: IProduct) => void
  cartCount: number
  priceTotalItems: number
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  priceTotalItems: 0
})

const ACTIONS = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_IS_OPEN: 'SET_CART_IS_OPEN'
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  priceTotalItems: 0
}

export const cartReducer = (state = INITIAL_STATE, action: any) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.SET_CART_ITEMS: {
      return { ...state, ...payload }
    }
    case ACTIONS.SET_CART_IS_OPEN: {
      return { ...state, isCartOpen: payload }
    }
    default: {
      throw new Error(`unhandler type of ${type} in cartReducer`)
    }
  }
}

export interface ICartProviderProps {
  children: ReactNode
}

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

export function CartProvider({ children }: ICartProviderProps) {
  const [{ cartItems, cartCount, priceTotalItems, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE)

  function updateCartItemsReducer(newCartItems: IProductCartItem[]) {
    const priceTotalItems = newCartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity)
    }, 0)

    const newCartCount = newCartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    )

    dispatch(
      createAction(ACTIONS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        priceTotalItems: priceTotalItems
      })
    )
  }

  function addItemsToCart(productToAdd: IProduct): void {
    const newCartItems = addCartItems(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  function removeItemFromCart(productToRemove: IProduct): void {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  function clearItemFromCart(productToRemove: IProduct): void {
    const newCartItems = clearCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  function setIsCartOpen(value: boolean) {
    dispatch(createAction(ACTIONS.SET_CART_IS_OPEN, value))
  }

  const value: CartContextType = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemsToCart,
    removeItemFromCart,
    clearItemFromCart,
    priceTotalItems
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
