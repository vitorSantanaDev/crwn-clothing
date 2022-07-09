import { SignInForm, SignUpForm } from 'components'

import * as S from './styles'

export default function Authentication() {
  return (
    <S.PageWrapper>
      <SignInForm />
      <SignUpForm />
    </S.PageWrapper>
  )
}
