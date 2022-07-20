import styled from 'styled-components'

export const CategoryPreviewWrapper = styled.main`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`

export const ProductsWrapper = styled.div`
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`

export const CategoryPreviewTitle = styled.h2`
  font-size: 28px;
  cursor: pointer;
  margin-bottom: 25px;
`
