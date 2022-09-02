import { ButtonComponent } from 'components/atoms'
import { SpinnerContainer } from '../../atoms/SpinnerLoading/styles'
import styled from 'styled-components'

export const PaymentFormWrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`

export const CreditCardPaymentsTitle = styled.h2``

export const PaymentButtonWrapper = styled.div`
  margin-left: auto;
  margin-top: 30px;
`

export const PaymentButton = styled(ButtonComponent)``

export const SpinerLoading = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
