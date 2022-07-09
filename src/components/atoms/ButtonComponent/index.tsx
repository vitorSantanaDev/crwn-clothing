import { ButtonTypeEnum, ButtonTypeStyleEnum, IButtonProps } from './types'
import * as S from './styles'

export default function ButtonComponent({
  children,
  handleClick,
  disabled = false,
  type = ButtonTypeEnum.BUTTON,
  buttonTypeStyle = ButtonTypeStyleEnum.DEFAULT
}: IButtonProps) {
  return (
    <S.ButtonElement
      type={type}
      disabled={disabled}
      onClick={handleClick}
      buttonTypeStyle={buttonTypeStyle}
    >
      {children}
    </S.ButtonElement>
  )
}
