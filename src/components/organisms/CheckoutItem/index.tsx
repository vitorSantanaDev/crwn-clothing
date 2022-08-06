import { useDispatch, useSelector } from 'react-redux'
import { cartStoreActions, cartStoreSelectors } from 'store'

import { ICheckoutItemProps } from './types'
import * as S from './styles'

export default function CheckoutItem(cartItem: ICheckoutItemProps) {
  const dispatch = useDispatch()
  const cartItems = useSelector(cartStoreSelectors.selectCartItems)

  const { name, quantity, price, imageUrl } = cartItem

  function callingRemoveItemFromCartAction() {
    dispatch(cartStoreActions.removeItemFromCart(cartItems, cartItem))
  }

  function callingAddItemsToCartAction() {
    dispatch(cartStoreActions.addItemsToCart(cartItems, cartItem))
  }

  function callingClearItemsToCartAction() {
    dispatch(cartStoreActions.clearItemFromCart(cartItems, cartItem))
  }

  return (
    <S.CheckoutItemWrapper>
      <S.CheckoutItemImageWrapper>
        <S.CheckoutItemImage src={imageUrl} alt={name} />
      </S.CheckoutItemImageWrapper>
      <S.CheckoutItemName>{name}</S.CheckoutItemName>
      <S.CheckoutItemQuantity>
        <S.DecrementButton onClick={callingRemoveItemFromCartAction}>
          &#10094;
        </S.DecrementButton>
        {quantity}
        <S.IncrementButton onClick={callingAddItemsToCartAction}>
          &#10095;
        </S.IncrementButton>
      </S.CheckoutItemQuantity>
      <S.CheckoutItemPrice>U$ {price}</S.CheckoutItemPrice>
      <S.ButtonRemoveWrapper onClick={callingClearItemsToCartAction}>
        &#10005;
      </S.ButtonRemoveWrapper>
    </S.CheckoutItemWrapper>
  )
}
