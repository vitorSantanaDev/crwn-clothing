import { useContext } from 'react'

import { CartContext } from 'contexts'

import { ButtonTypeStyleEnum } from 'components/atoms/ButtonComponent/types'
import { ButtonComponent, CartItem } from 'components/atoms'

import * as S from './styles'

export default function CartDropDown() {
  const { cartItems } = useContext(CartContext)

  return (
    <S.CartDropDownWrapper>
      <S.CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </S.CartItems>
      <ButtonComponent buttonTypeStyle={ButtonTypeStyleEnum.DEFAULT}>
        Pagamento
      </ButtonComponent>
    </S.CartDropDownWrapper>
  )
}
