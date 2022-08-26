import { Fragment, useState } from 'react'
import { UserCredential } from 'firebase/auth'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { createUser, createUserDocumentFromAuth } from 'services/firebase'

import { registrationFormValidation } from 'schemas'
import { errorMessages, successMessages } from 'utils'

import { ButtonTypeEnum } from 'components/atoms/ButtonComponent/types'
import { ButtonComponent, InputComponent, Loading } from 'components/atoms'

import * as S from './styles'
import { userActions } from 'store'

const fieldsForm = [
  {
    value: '',
    type: 'text',
    name: 'displayName',
    errorComponent: 'span',
    label: 'Nome*',
    placeholder: 'Nome'
  },
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
  },
  {
    value: '',
    type: 'password',
    errorComponent: 'span',
    name: 'confirmPassword',
    label: 'Confirmar senha*',
    placeholder: 'Confirme sua senha'
  }
]

export default function SignUpForm() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [defaultValueFields] = useState(setInitialValuesFields())

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
      const { displayName, email, password } = values

      setLoading(true)
      dispatch(userActions.signUpStart(email, password, displayName))
      setLoading(false)

      toast.success(successMessages.USER_CREATED_SUCCESSFULLY)
      resetForm({ values: setInitialValuesFields() })
      window.history.back()
    } catch (err) {
      setLoading(false)
      toast.error(errorMessages.EMAIL_ALREADY_IN_USE)
      console.error(err)
    }
  }

  return (
    <S.FormWrapper>
      <S.SignUpTitle>Não possui uma conta?</S.SignUpTitle>
      <S.FormTitle>Faça seu cadastro</S.FormTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={defaultValueFields}
        validationSchema={registrationFormValidation}
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
          <ButtonComponent disabled={loading} type={ButtonTypeEnum.SUBMIT}>
            {loading ? <Loading /> : 'Enviar'}
          </ButtonComponent>
        </Form>
      </Formik>
    </S.FormWrapper>
  )
}
