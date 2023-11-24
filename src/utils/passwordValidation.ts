import * as Yup from 'yup';

export const passwordValidation = Yup.string()
    .trim() // removes whitespace 
    .required('Required')

    .matches(/(?=.*[A-Z])/, "Your password needs to have at least one capital letter.")
    .matches(/(?=.*[!@#$%^&*])/, "Your password needs to have at least one special character.")
    .matches(/(?=.*[a-z])/, "Your password needs to have at least one lower case character.")
    .matches(/(?=.*[0-9])/, "Your password needs to have at least one number.")

    .min(6)
    .max(50)
