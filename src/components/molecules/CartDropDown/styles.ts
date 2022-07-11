import styled from 'styled-components'
import { ButtonElement as ButtonComponent } from 'components/atoms/ButtonComponent/styles'

export const CartDropDownWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  ${ButtonComponent} {
    margin-top: auto;
  }
`
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #ffff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ddd;
  }
`
