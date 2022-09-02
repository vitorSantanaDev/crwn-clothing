import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

import { userActions } from 'store'

import { errorMessages } from 'utils'
import { signInFormValidation } from 'schemas'
import routesName from 'routes/enum.routes'

import { ButtonComponent, InputComponent, Loading } from 'components/atoms'
import {
  ButtonTypeEnum,
  ButtonTypeStyleEnum
} from 'components/atoms/ButtonComponent/types'

import * as S from './styles'

const fieldsForm = [
  {
    value: '',
    type: 'email',
    name: 'email',
    errorComponent: 'span',
    label: 'E-mail*',
    placeholder: 'E-mail'
  },
  {
    value: '',
    type: 'password',
    name: 'password',
    errorComponent: 'span',
    label: 'Senha*',
    placeholder: 'Senha'
  }
]

export default function SignInForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => (state as { user: any }).user)
  const [loading, setLoading] = useState(false)
  const [defaultValueFields] = useState(setInitialValuesFields())

  function signInWithGoogle() {
    dispatch(userActions.googleSignInStart())
    if (!user) return
    navigate(routesName.HOME)
  }

  function setInitialValuesFields() {
    return fieldsForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: field.value
      }
    }, {})
  }

  async function handleSubmit(
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) {
    try {
      setLoading(true)
      const { email, password } = values
      dispatch(userActions.emailSignInStart({ email, password }))
      setLoading(false)
      resetForm({ values: setInitialValuesFields() })
      navigate(routesName.HOME)
      return
    } catch (err) {
      setLoading(false)
      const error = err as { code: string }
      toast.error(errorMessages.INVALID_EMAIL_OR_PASSWORD)
      console.error({ error: error.code })
    }
  }

  return (
    <S.FormWrapper>
      <S.SignUpTitle>Já possui uma conta?</S.SignUpTitle>
      <S.FormTitle>Entre com seu e-mail e senha</S.FormTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultValueFields}
        validationSchema={signInFormValidation}
      >
        <Form>
          {fieldsForm.map(({ errorComponent, name, type, placeholder }) => (
            <Fragment key={name}>
              <InputComponent
                name={name}
                type={type}
                placeholder={placeholder}
                errorComponent={errorComponent}
              />
            </Fragment>
          ))}
          <S.ButtonsWrapper>
            <ButtonComponent disabled={loading} type={ButtonTypeEnum.SUBMIT}>
              {loading ? <S.SpinnerLoading /> : 'Entrar'}
            </ButtonComponent>
            <ButtonComponent
              disabled={loading}
              type={ButtonTypeEnum.BUTTON}
              handleClick={signInWithGoogle}
              buttonTypeStyle={ButtonTypeStyleEnum.GOOGLE_SIGN_IN}
            >
              Google login
            </ButtonComponent>
          </S.ButtonsWrapper>
        </Form>
      </Formik>
    </S.FormWrapper>
  )
}
