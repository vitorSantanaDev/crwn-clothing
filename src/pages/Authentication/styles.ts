import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    gap: 40px;
    padding: 0 24px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`
