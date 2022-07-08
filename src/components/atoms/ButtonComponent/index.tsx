import { ButtonTypeEnum, ButtonTypeStyleEnum, IButtonProps } from './types'
import * as S from './styles'

export default function ButtonComponent({
  children,
  type = ButtonTypeEnum.BUTTON,
  buttonTypeStyle = ButtonTypeStyleEnum.DEFAULT
}: IButtonProps) {
  return (
    <S.ButtonElement type={type} buttonTypeStyle={buttonTypeStyle}>
      {children}
    </S.ButtonElement>
  )
}
