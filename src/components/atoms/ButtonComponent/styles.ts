import styled, { css } from 'styled-components'

import { ButtonTypeStyleEnum } from './types'

type ButtonProps = {
  buttonTypeStyle: ButtonTypeStyleEnum
}

export const ButtonElement = styled.button<ButtonProps>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &:disabled {
    cursor: not-allowed;

    &:hover {
      color: white;
      background-color: black;
    }
  }

  ${({ buttonTypeStyle }) =>
    buttonTypeStyle === ButtonTypeStyleEnum.GOOGLE_SIGN_IN &&
    css`
       {
        background-color: #4285f4;
        color: white;

        &:hover {
          background-color: #357ae8;
          border: none;
        }
      }
    `}

  ${({ buttonTypeStyle }) =>
    buttonTypeStyle === ButtonTypeStyleEnum.INVERTED &&
    css`
      background-color: white;
      color: black;
      border: 1px solid black;

      &:hover {
        background-color: black;
        color: white;
        border: none;
      }
    `}
`
