import { ErrorMessage, Field } from 'formik'

import { InputComponentProps } from './types'

import * as S from './styles'

export default function InputComponent({
  name,
  type,
  placeholder,
  errorComponent
}: InputComponentProps) {
  return (
    <S.InputWrapper>
      <Field
        name={name}
        type={type}
        className="input"
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={errorComponent} />
    </S.InputWrapper>
  )
}
