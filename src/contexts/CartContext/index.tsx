import { createContext, ReactNode, useState, useEffect } from 'react'

import { IProduct, IProductCartItem } from 'interfaces'

export type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>
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
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<IProductCartItem[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [priceTotalItems, setPriceTotalItems] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const priceTotalItems = cartItems.reduce((acc, item) => {
      return (acc += item.price * item.quantity)
    }, 0)

    setPriceTotalItems(priceTotalItems)
  }, [cartItems])

  function addItemsToCart(productToAdd: IProduct): void {
    setCartItems(addCartItems(cartItems, productToAdd))
  }

  function removeItemFromCart(productToRemove: IProduct): void {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  function clearItemFromCart(productToRemove: IProduct): void {
    setCartItems(clearCartItem(cartItems, productToRemove))
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
