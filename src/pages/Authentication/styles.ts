import styled from 'styled-components'

export const PageWrapper = styled.main`
  width: 900px;
  display: flex;
  margin: 30px auto;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: fit-content;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`
