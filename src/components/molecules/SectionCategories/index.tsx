import React from 'react'
import { CategoryCard } from 'components/atoms'

import { IViewProps } from './types'
import * as S from './styles'

export default function SectionCategories({ categories }: IViewProps) {
  return (
    <S.CategoriesWrapper>
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </S.CategoriesWrapper>
  )
}
