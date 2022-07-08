import { Fragment, useState } from 'react'
import { UserCredential } from 'firebase/auth'
import { Form, Formik, FormikValues } from 'formik'

import { createUser, createUserDocumentFromAuth } from 'services/firebase'

import registrationFormValidation from 'schemas/signUpForm'

import { ButtonComponent, InputComponent } from 'components/atoms'
import { ButtonTypeEnum } from 'components/atoms/ButtonComponent/types'

import * as S from './styles'

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
  const [defaultValueFields, setDeafaultValueFields] = useState(
    setInitialValuesFields()
  )

  function setInitialValuesFields() {
    return fieldsForm.reduce((acc, field) => {
      return {
        ...acc,
        [field.name]: field.value
      }
    }, {})
  }

  async function handleSubmit(values: FormikValues) {
    const { displayName, email, password } = values

    try {
      const { user } = (await createUser(email, password)) as UserCredential
      await createUserDocumentFromAuth(user, { displayName })
      setDeafaultValueFields(setInitialValuesFields())
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <S.FormWrapper>
      <S.SignUpTitle>{"Don't have an account?"}</S.SignUpTitle>
      <S.FormTitle>Sign up with your email and password</S.FormTitle>
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
          <ButtonComponent type={ButtonTypeEnum.SUBMIT}>Enviar</ButtonComponent>
        </Form>
      </Formik>
    </S.FormWrapper>
  )
}
