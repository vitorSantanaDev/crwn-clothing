import styled from 'styled-components'

export const CheckoutPageWrapper = styled.main`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const CheckoutHeader = styled.header`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`

export const HeaderBlockItem = styled.span`
  font-size: 14px;
  font-weight: 600;
`

export const CartItemsWrapper = styled.div``

export const TotalLabel = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  display: inline-block;
`
