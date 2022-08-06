import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cartStoreSelectors, cartStoreActions } from 'store'

import { ButtonTypeStyleEnum } from 'components/atoms/ButtonComponent/types'
import { ButtonComponent, CartItem } from 'components/atoms'

import { IProductCartItem } from 'interfaces'
import routesName from 'routes/enum.routes'

import * as S from './styles'

export default function CartDropDown() {
  const isCartOpen = useSelector(cartStoreSelectors.selectCartIsOpen)
  const cartItems = useSelector(cartStoreSelectors.selectCartItems)
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const handleNavigationToCheckoutPage = () => {
    dispatch(cartStoreActions.setIsCartOpen(!isCartOpen))
    navigation(routesName.CHECKOUT)
  }

  return (
    <S.CartDropDownWrapper>
      <S.CartItems>
        {cartItems.map((item: IProductCartItem) => (
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
