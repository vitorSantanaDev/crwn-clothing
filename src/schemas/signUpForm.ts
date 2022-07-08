import * as yup from 'yup'

const REGEX_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

const registrationFormValidation = yup.object().shape({
  displayName: yup.string().required('Este campo é obrigatório.'),
  email: yup
    .string()
    .email()
    .matches(REGEX_EMAIL, 'Por favor digite um e-mail válido.')
    .required('Este campo é obrigatório.'),
  password: yup
    .string()
    .matches(
      REGEX_PASSWORD,
      'A senha precisa ter pelo menos um caractere maiusculo, um minúsculo e 1 digíto.'
    )
    .required('Este campo é obrigatório.'),
  confirmPassword: yup
    .string()
    .required('Este campo é obrigatório.')
    .oneOf([yup.ref('password')], 'As senhas não conferem')
})

export default registrationFormValidation
