import React from 'react'
import * as S from './styles'
import { IViewProps } from './types'

export default function CategoryCard({
  title,
  action,
  urlImageBackground
}: IViewProps) {
  return (
    <S.CategoryContainer>
      <S.CategoryBackground urlImageBackground={urlImageBackground} />
      <S.CategoryBody className="bodyContent">
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategoryAction>{action}</S.CategoryAction>
      </S.CategoryBody>
    </S.CategoryContainer>
  )
}
