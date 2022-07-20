import { Container, ProductCard } from 'components'

import { ICategoryPreviewProps } from './types'

import * as S from './styles'
import { Link } from 'react-router-dom'
import routesName from 'routes/enum.routes'

const CategoryPreview = ({ title, products }: ICategoryPreviewProps) => {
  return (
    <Container>
      <S.CategoryPreviewWrapper>
        <S.CategoryPreviewTitle>
          <Link to={`${routesName.CATEGORY}/${title}`}>
            {title.toUpperCase()}
          </Link>
        </S.CategoryPreviewTitle>
        <S.ProductsWrapper>
          {products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </S.ProductsWrapper>
      </S.CategoryPreviewWrapper>
    </Container>
  )
}

export default CategoryPreview
