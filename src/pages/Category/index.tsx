/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Container, ProductCard } from 'components'

import { CategoriesContext } from 'contexts'

import { IProduct } from 'interfaces'

import * as S from './styles'

export default function Category() {
  const [products, setProducts] = useState<IProduct[]>([])
  const { category } = useParams()
  const { categories } = useContext(CategoriesContext)

  useEffect(() => {
    //@ts-ignore
    setProducts(categories[category as string])
  }, [categories, category])

  return (
    <Container>
      <S.CategoryTitle>{category?.toUpperCase()}</S.CategoryTitle>
      <S.CategoryWrapper>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </S.CategoryWrapper>
    </Container>
  )
}
