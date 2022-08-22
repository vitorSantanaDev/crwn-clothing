import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, ProductCard, SpinnerLoading } from 'components'

import { categoriesSelectors } from 'store'
import { IProduct } from 'interfaces'

import * as S from './styles'

export default function Category() {
  const [products, setProducts] = useState<IProduct[]>([])

  const { category } = useParams()

  const categories = useSelector(categoriesSelectors.selectCategoriesArray)
  const isLoading = useSelector(categoriesSelectors.selectCategoriesIsLoading)

  useEffect(() => {
    if (categories) setProducts(categories[category as string])
  }, [categories, category])

  if (isLoading) {
    return <SpinnerLoading />
  }

  if (products) {
    return (
      <Container>
        <S.CategoryTitle>{category?.toUpperCase()}</S.CategoryTitle>
        <S.CategoryWrapper>
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </S.CategoryWrapper>
      </Container>
    )
  }
  return null
}
