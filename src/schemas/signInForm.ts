import { errorMessages } from 'utils/errorMessages'
import * as yup from 'yup'

const REGEX_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

export const signInFormValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(REGEX_EMAIL, errorMessages.EMAIL_IS_INVALID)
    .required(errorMessages.REQUIRED_FIELD),
  password: yup
    .string()
    .matches(REGEX_PASSWORD, errorMessages.INVALID_PASSWORD)
    .required(errorMessages.REQUIRED_FIELD)
})
