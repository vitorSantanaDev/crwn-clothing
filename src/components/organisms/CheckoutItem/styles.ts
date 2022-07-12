import styled from 'styled-components'

export const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const CheckoutItemImageWrapper = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CheckoutItemName = styled.span`
  width: 23%;
`

export const CheckoutItemPrice = styled.span`
  width: 23%;
`

export const CheckoutItemQuantity = styled.span`
  width: 23%;
  display: flex;

  .arrow {
    cursor: pointer;
  }
`

export const ButtonRemoveWrapper = styled.span`
  display: inline-block;
  padding-left: 12px;
  cursor: pointer;
  transition: all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`

export const DecrementButton = styled.button`
  border: none;
  cursor: pointer;
  margin-right: 16px;
  font-weight: bold;
  background-color: transparent;

  transition: all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`
export const IncrementButton = styled.button`
  border: none;
  cursor: pointer;
  margin-left: 16px;
  font-weight: bold;
  background-color: transparent;

  transition: all ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`
