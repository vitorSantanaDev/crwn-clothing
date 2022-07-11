import { useContext } from 'react'

import { CartContext } from 'contexts'

import ButtonComponent from '../ButtonComponent'
import { ButtonTypeStyleEnum } from '../ButtonComponent/types'

import { IProductCardProps } from './types'

import * as S from './styles'

export default function ProductCard({
  id,
  name,
  price,
  imageUrl
}: IProductCardProps) {
  const { addItemsToCart } = useContext(CartContext)
  const product = { id, name, price, imageUrl }

  function addProductToCart() {
    addItemsToCart?.(product)
  }

  return (
    <S.ProductCardWrapper>
      <S.ImageProduct src={product.imageUrl} alt={product.name} />
      <S.ProductFooter>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>{product.price}</S.ProductPrice>
      </S.ProductFooter>
      <ButtonComponent
        handleClick={addProductToCart}
        buttonTypeStyle={ButtonTypeStyleEnum.INVERTED}
      >
        comprar
      </ButtonComponent>
    </S.ProductCardWrapper>
  )
}
