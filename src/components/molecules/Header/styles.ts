import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  .logoContainer {
    height: 100%;
    width: 70px;
    padding: 25px;
  }
`

export const NavigationWrapper = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .navLink {
    font-size: 1.8rem;
    padding: 10px 15px;
    cursor: pointer;
    text-transform: uppercase;
  }
`
