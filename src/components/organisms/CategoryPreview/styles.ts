import styled from 'styled-components'

export const CategoryPreviewWrapper = styled.main`
  margin-bottom: 30px;
  display: grid;
`

export const ProductsWrapper = styled.div`
  display: grid;
  column-gap: 20px;

  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`

export const CategoryPreviewTitle = styled.h2`
  font-size: 28px;
  cursor: pointer;
  margin-bottom: 25px;
`
