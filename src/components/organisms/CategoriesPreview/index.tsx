import React from 'react'
import { useSelector } from 'react-redux'

import { categoriesSelectors } from 'store'

import { CategoryPreview, Container, SpinnerLoading } from 'components'

import * as S from './styles'

export default function CategoriesPreview() {
  const categories = useSelector(categoriesSelectors.selectCategoriesArray)
  const isLoading = useSelector(categoriesSelectors.selectCategoriesIsLoading)

  if (isLoading) {
    return <SpinnerLoading />
  }

  if (categories) {
    return (
      <Container>
        <S.CategoriesWrapper>
          {Object.keys(categories).map((category) => {
            const products = categories[category]
            return (
              <CategoryPreview
                key={category}
                title={category}
                products={products}
              />
            )
          })}
        </S.CategoriesWrapper>
      </Container>
    )
  }
  return null
}
