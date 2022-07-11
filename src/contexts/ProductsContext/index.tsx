import { IProduct } from 'interfaces'
import { createContext, ReactNode, useState } from 'react'

import PRODUCTS from '../../database/shop-data.json'

export const ProductContext = createContext<{
  products: Array<IProduct>
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>> | null
}>({
  products: [],
  setProducts: null
})

interface IProductsProviderProps {
  children: ReactNode
}

export function ProductsProvider({ children }: IProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS)
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
