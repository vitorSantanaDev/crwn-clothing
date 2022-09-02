import { SpinnerContainer } from 'components/atoms/SpinnerLoading/styles'
import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`
export const SignUpTitle = styled.h2`
  margin: 10px 0;
  font-size: 24px;
`
export const FormTitle = styled.span`
  font-size: 16px;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SpinnerLoading = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
