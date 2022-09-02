import React, { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import { cartStoreSelectors, userSelector } from 'store'

import {
  ButtonTypeEnum,
  ButtonTypeStyleEnum
} from 'components/atoms/ButtonComponent/types'

import { errorMessages } from 'utils'

import * as S from './styles'

export default function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const currentUser = useSelector(userSelector)
  const amount = useSelector(cartStoreSelectors.selectCartTotalPrice)

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!stripe || !elements) return

    setIsProcessingPayment(true)
    const response = await fetch(`/.netlify/functions/create-payment-intent`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((response) => response.json())

    const {
      paymentIntent: { client_secret }
    } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest'
        }
      }
    })
    setIsProcessingPayment(false)

    if (paymentResult.error) {
      toast.error(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        toast.success(errorMessages.PAYMENT_SUCCESSFULY)
      }
    }
  }

  return (
    <S.PaymentFormWrapper>
      <S.FormContainer onSubmit={paymentHandler}>
        <S.CreditCardPaymentsTitle>
          Pagamento com cartão de crédito:
        </S.CreditCardPaymentsTitle>
        <CardElement />
        <S.PaymentButtonWrapper>
          <S.PaymentButton
            disabled={isProcessingPayment}
            type={ButtonTypeEnum.SUBMIT}
            buttonTypeStyle={ButtonTypeStyleEnum.INVERTED}
          >
            {isProcessingPayment ? <S.SpinerLoading /> : 'Pagar Agora'}
          </S.PaymentButton>
        </S.PaymentButtonWrapper>
      </S.FormContainer>
    </S.PaymentFormWrapper>
  )
}
