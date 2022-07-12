import { ICheckoutItemProps } from './types'

import * as S from './styles'
import { useContext } from 'react'
import { CartContext } from 'contexts'

export default function CheckoutItem(cartItem: ICheckoutItemProps) {
  const { clearItemFromCart, addItemsToCart, removeItemFromCart } =
    useContext(CartContext)

  const { name, quantity, price, imageUrl } = cartItem

  return (
    <S.CheckoutItemWrapper>
      <S.CheckoutItemImageWrapper>
        <S.CheckoutItemImage src={imageUrl} alt={name} />
      </S.CheckoutItemImageWrapper>
      <S.CheckoutItemName>{name}</S.CheckoutItemName>
      <S.CheckoutItemQuantity>
        <S.DecrementButton onClick={() => removeItemFromCart?.(cartItem)}>
          &#10094;
        </S.DecrementButton>
        {quantity}
        <S.IncrementButton onClick={() => addItemsToCart?.(cartItem)}>
          &#10095;
        </S.IncrementButton>
      </S.CheckoutItemQuantity>
      <S.CheckoutItemPrice>U$ {price}</S.CheckoutItemPrice>
      <S.ButtonRemoveWrapper onClick={() => clearItemFromCart?.(cartItem)}>
        &#10005;
      </S.ButtonRemoveWrapper>
    </S.CheckoutItemWrapper>
  )
}
