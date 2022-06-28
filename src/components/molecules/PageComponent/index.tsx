import React from 'react'

import Header from '../Header'

import { IViewProps } from './types'
import * as S from './styles'

export default function PageComponent({
  children,
  includesHeader
}: IViewProps) {
  return (
    <S.PageWrapper>
      {includesHeader && <Header />}
      {children}
    </S.PageWrapper>
  )
}
