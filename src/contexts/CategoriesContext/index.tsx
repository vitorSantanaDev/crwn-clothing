import { createContext, ReactNode, useEffect, useState } from 'react'

import { CategoryTypenum, IProduct } from 'interfaces'

import { getCategoriesAndDocuments } from 'services/firebase'

export const CategoriesContext = createContext<{
  categories: ICategories | undefined
}>({
  categories: undefined
})

interface ICategoriesProviderProps {
  children: ReactNode
}

interface ICategories {
  [CategoryTypenum.HATS]: IProduct[]
  [CategoryTypenum.JACKETS]: IProduct[]
  [CategoryTypenum.SNEAKERS]: IProduct[]
  [CategoryTypenum.MENS]: IProduct[]
  [CategoryTypenum.WOMENS]: IProduct[]
}

export function CategoriesProvider({ children }: ICategoriesProviderProps) {
  const [categories, setCategories] = useState<ICategories>()

  useEffect(() => {
    ;(async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategories(categoryMap)
    })()
  }, [])

  return (
    <CategoriesContext.Provider
      value={{ categories: categories && categories }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}
