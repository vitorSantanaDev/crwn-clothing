import { Fragment, useState } from 'react'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { toast } from 'react-toastify'

import { sigInWithGooglePopup, sigInAuthUser } from 'services/firebase'

import { signInFormValidation } from 'schemas'
import { errorMessages } from 'utils'
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
  const [loading, setLoading] = useState(false)
  const [defaultValueFields] = useState(setInitialValuesFields())

  async function signInWithGoogle() {
    await sigInWithGooglePopup()
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

      await sigInAuthUser(email, password)

      setLoading(false)
      resetForm({ values: setInitialValuesFields() })
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
      <S.SignUpTitle>Already have an account</S.SignUpTitle>
      <S.FormTitle>Sign in with your email and password</S.FormTitle>
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
              {loading ? <Loading /> : 'Sign In'}
            </ButtonComponent>
            <ButtonComponent
              disabled={loading}
              type={ButtonTypeEnum.BUTTON}
              handleClick={signInWithGoogle}
              buttonTypeStyle={ButtonTypeStyleEnum.GOOGLE_SIGN_IN}
            >
              Google Sign In
            </ButtonComponent>
          </S.ButtonsWrapper>
        </Form>
      </Formik>
    </S.FormWrapper>
  )
}
