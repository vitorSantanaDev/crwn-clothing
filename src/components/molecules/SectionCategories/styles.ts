import styled from 'styled-components'

export const CategoriesWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
