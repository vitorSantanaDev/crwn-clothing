/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Container, ProductCard } from 'components'

import { categoriesSelector } from 'store'
import { IProduct } from 'interfaces'

import * as S from './styles'

export default function Category() {
  const [products, setProducts] = useState<IProduct[]>([])

  const { category } = useParams()

  const categories = useSelector(categoriesSelector)

  useEffect(() => {
    if (categories) setProducts(categories[category as string])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])

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
