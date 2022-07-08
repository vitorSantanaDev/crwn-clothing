import { ReactNode } from 'react'

export enum ButtonTypeEnum {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset'
}

export enum ButtonTypeStyleEnum {
  DEFAULT = 'default',
  INVERTED = 'inverted',
  GOOGLE_SIGN_IN = 'google-sign-in'
}

export interface IButtonProps {
  children: ReactNode
  type?: ButtonTypeEnum
  buttonTypeStyle?: ButtonTypeStyleEnum
}
