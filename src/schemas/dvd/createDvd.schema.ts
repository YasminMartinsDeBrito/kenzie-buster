import * as yup from 'yup'

const createDvdSchema = yup.object().shape({
    dvds: yup.array().of(
        yup.object().shape({
            name: yup.string().required(),
            duration: yup.string().required(),
            quantity: yup.number().positive().required(),
            price: yup.number().positive().required()
        }).required()
    ).required()
})

const serializedCreateDvdSchema = yup.array().of(
    yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        duration: yup.string().required(),
        stock: yup.object().shape({
            id: yup.string(),
            quantity: yup.number(),
            price: yup.number()
        })
    }).required()
).required()

export { createDvdSchema, serializedCreateDvdSchema}