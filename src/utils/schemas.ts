import * as Yup from 'yup'
import {passwordValidation} from '../utils/passwordValidation'

export const SignUpSchema = Yup.object().shape({
    username: Yup.string(),
    email: Yup.string().email("Invalid email").required("Required"),
    password: passwordValidation,
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), ''], 'Passwords must match').required("Required")
});