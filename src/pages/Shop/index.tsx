import { useContext } from 'react'

import { ProductContext } from 'contexts'

import { ProductCard } from 'components'

import * as S from './styles'

export default function Shop() {
  const { products } = useContext(ProductContext)
  return (
    <S.ShopWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </S.ShopWrapper>
  )
}
