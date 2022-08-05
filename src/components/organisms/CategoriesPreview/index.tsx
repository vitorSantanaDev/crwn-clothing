/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { useSelector } from 'react-redux'

import { categoriesSelector } from 'store'

import { CategoryPreview, Container } from 'components'

import * as S from './styles'

export default function CategoriesPreview() {
  const categories = useSelector(categoriesSelector)

  return (
    <Container>
      <S.CategoriesWrapper>
        {categories
          ? Object.keys(categories).map((category) => {
              // eslint-disable-next-line prettier/prettier
              {
                /*@ts-ignore*/
              }
              const products = categories[category]
              return (
                <CategoryPreview
                  key={category}
                  title={category}
                  products={products}
                />
              )
            })
          : null}
      </S.CategoriesWrapper>
    </Container>
  )
}
