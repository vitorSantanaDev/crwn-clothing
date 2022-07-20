/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useContext } from 'react'

import { CategoryPreview, Container } from 'components'

import { CategoriesContext } from 'contexts'

import * as S from './styles'

export default function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext)
  return (
    <Container>
      <S.CategoriesWrapper>
        {categories
          ? Object.keys(categories).map((category) => {
              // eslint-disable-next-line prettier/prettier
              {/*@ts-ignore*/ }
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
