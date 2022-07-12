import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from 'contexts'

import { ButtonTypeStyleEnum } from 'components/atoms/ButtonComponent/types'
import { ButtonComponent, CartItem } from 'components/atoms'

import routesName from 'routes/enum.routes'

import * as S from './styles'

export default function CartDropDown() {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext)
  const navigation = useNavigate()

  const handleNavigationToCheckoutPage = () => {
    setIsCartOpen?.(!isCartOpen)
    navigation(routesName.CHECKOUT)
  }

  return (
    <S.CartDropDownWrapper>
      <S.CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </S.CartItems>
      <ButtonComponent
        handleClick={handleNavigationToCheckoutPage}
        buttonTypeStyle={ButtonTypeStyleEnum.DEFAULT}
      >
        Pagamento
      </ButtonComponent>
    </S.CartDropDownWrapper>
  )
}
