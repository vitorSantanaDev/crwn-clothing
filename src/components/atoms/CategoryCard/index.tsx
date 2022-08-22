import React from 'react'
import { useNavigate } from 'react-router-dom'

import routesName from 'routes/enum.routes'

import { IViewProps } from './types'

import * as S from './styles'

export default function CategoryCard({
  title,
  action,
  route,
  urlImageBackground
}: IViewProps) {
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(`${routesName.CATEGORY}/${route}`)

  return (
    <S.CategoryContainer onClick={onNavigateHandler}>
      <S.CategoryBackground urlImageBackground={urlImageBackground} />
      <S.CategoryBody className="bodyContent">
        <S.CategoryTitle>{title}</S.CategoryTitle>
        <S.CategoryAction>{action}</S.CategoryAction>
      </S.CategoryBody>
    </S.CategoryContainer>
  )
}
