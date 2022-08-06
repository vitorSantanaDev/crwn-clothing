import React from 'react'
import { useSelector } from 'react-redux'

import { cartStoreSelectors } from 'store'
import { IProductCartItem } from 'interfaces'

import { CheckoutItem, Container } from 'components'

import * as S from './styles'

const checkoutHeaderTags = [
  'Produto',
  'Descrição',
  'Quantidade',
  'Preço',
  'Remover'
]

export default function Checkout() {
  const cartItems = useSelector(cartStoreSelectors.selectCartItems)
  const priceTotalItems = useSelector(cartStoreSelectors.selectCartTotalPrice)

  return (
    <Container>
      <S.CheckoutPageWrapper>
        <S.CheckoutHeader>
          {checkoutHeaderTags.map((item) => (
            <S.HeaderBlock key={item}>
              <S.HeaderBlockItem>{item}</S.HeaderBlockItem>
            </S.HeaderBlock>
          ))}
        </S.CheckoutHeader>
        <S.CartItemsWrapper>
          {cartItems.map((cartItem: IProductCartItem) => {
            return <CheckoutItem key={cartItem.id} {...cartItem} />
          })}
        </S.CartItemsWrapper>
        <S.TotalLabel>Total: {priceTotalItems}</S.TotalLabel>
      </S.CheckoutPageWrapper>
    </Container>
  )
}
