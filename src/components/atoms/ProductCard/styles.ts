import styled from 'styled-components'
import { ButtonElement as ButtonComponent } from '../ButtonComponent/styles'

export const ProductCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  transition: all ease-in-out 300ms;

  ${ButtonComponent} {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    ${ButtonComponent} {
      opacity: 0.85;
      display: flex;
    }
  }
`

export const ImageProduct = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const ProductFooter = styled.footer`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const ProductPrice = styled.span`
  width: 10%;
`
