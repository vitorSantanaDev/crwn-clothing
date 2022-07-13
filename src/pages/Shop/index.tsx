import { useContext } from 'react'

import { ProductContext } from 'contexts'

import { Container, ProductCard } from 'components'

import * as S from './styles'

export default function Shop() {
  const { products } = useContext(ProductContext)

  return (
    <Container>
      <S.ShopWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </S.ShopWrapper>
    </Container>
  )
}
