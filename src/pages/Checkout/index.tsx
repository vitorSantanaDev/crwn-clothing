import { useContext } from 'react'

import { CartContext } from 'contexts'

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
  const { cartItems, priceTotalItems } = useContext(CartContext)

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
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} {...cartItem} />
          })}
        </S.CartItemsWrapper>
        <S.TotalLabel>Total: {priceTotalItems}</S.TotalLabel>
      </S.CheckoutPageWrapper>
    </Container>
  )
}
