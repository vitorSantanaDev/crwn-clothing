import styled from 'styled-components'

export const CartIconWrapper = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shoppingIcon {
    width: 24px;
    height: 24px;
  }
`
export const ItemsNumber = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`
