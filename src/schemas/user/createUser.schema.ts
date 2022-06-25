import * as yup from 'yup'

const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().lowercase().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().default(false).optional()
})

const serializedCreateUserSchema = yup.object().shape({
    id: yup.string().uuid().required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    isAdm: yup.boolean().required()
})

export { createUserSchema, serializedCreateUserSchema}