/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Fragment, useContext } from 'react'

import { CategoriesContext } from 'contexts'

import { IProduct } from 'interfaces'
import { Container, ProductCard } from 'components'

import * as S from './styles'

export default function Shop() {
  const { categories } = useContext(CategoriesContext)

  return (
    <Container>
      {categories &&
        Object.keys(categories).map((category) => (
          <Fragment key={category}>
            <S.CategoryTitle>{category.toLocaleUpperCase()}</S.CategoryTitle>
            <S.ShopWrapper>
              {/* @ts-ignore */}
              {categories[category].map((product: IProduct) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </S.ShopWrapper>
          </Fragment>
        ))}
    </Container>
  )
}
