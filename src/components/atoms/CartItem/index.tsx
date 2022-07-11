import { ICartItemProps } from './types'

import * as S from './styles'

export default function CartItem({
  name,
  quantity,
  imageUrl,
  price
}: ICartItemProps) {
  return (
    <S.CartItemWrapper>
      <S.ImageItem src={imageUrl} alt={name} />
      <S.InfosItemWrapper>
        <S.ItemName>{name}</S.ItemName>
        <S.ItemQuantity>
          {quantity} x ${price}
        </S.ItemQuantity>
      </S.InfosItemWrapper>
    </S.CartItemWrapper>
  )
}
