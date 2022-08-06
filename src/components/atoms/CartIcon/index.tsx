import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

import { cartStoreSelectors, cartStoreActions } from 'store'

import * as S from './styles'

export default function CartIcon() {
  const cartCount = useSelector(cartStoreSelectors.selectCartCount)
  const isCartOpen = useSelector(cartStoreSelectors.selectCartIsOpen)
  const dispatch = useDispatch()

  const toggleIsCartOpen = () =>
    dispatch(cartStoreActions.setIsCartOpen(!isCartOpen))

  return (
    <S.CartIconWrapper onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoppingIcon" />
      <S.ItemsNumber>{cartCount}</S.ItemsNumber>
    </S.CartIconWrapper>
  )
}
