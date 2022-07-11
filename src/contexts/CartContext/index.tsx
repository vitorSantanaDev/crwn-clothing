import { createContext, ReactNode, useState, useEffect } from 'react'

import { IProduct, IProductCartItem } from 'interfaces'

export type CartContextType = {
  isCartOpen: boolean
  setIsCartOpen?: React.Dispatch<React.SetStateAction<boolean>>
  cartItems: IProductCartItem[]
  addItemsToCart?: (productToAdd: IProduct) => void
  cartCount: number
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0
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

export function CartProvider({ children }: ICartProviderProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<IProductCartItem[]>([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  function addItemsToCart(productToAdd: IProduct): void {
    setCartItems(addCartItems(cartItems, productToAdd))
  }

  const value: CartContextType = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    cartCount,
    addItemsToCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
