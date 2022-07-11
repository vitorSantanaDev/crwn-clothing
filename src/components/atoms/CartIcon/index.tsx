import { useContext } from 'react'

import { CartContext } from 'contexts'

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg'

import * as S from './styles'

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen?.(!isCartOpen)

  return (
    <S.CartIconWrapper onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoppingIcon" />
      <S.ItemsNumber>{cartCount}</S.ItemsNumber>
    </S.CartIconWrapper>
  )
}
