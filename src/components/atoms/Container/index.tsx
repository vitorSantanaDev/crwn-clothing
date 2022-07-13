import { IContainerProps } from './types'

import * as S from './styles'

export default function Container({ children }: IContainerProps) {
  return <S.ContainerWrapper>{children}</S.ContainerWrapper>
}
